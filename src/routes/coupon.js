import express from 'express';
import _ from 'lodash';

import { Coupon } from 'models';
import { redisClient } from 'utils';

const router = new express.Router();

const build = (username) => 'uid-' + username;

router.post('/add', async (req, res) => {
  let { promoCode } = req.body;
  let counter = await redisClient.hgetAsync(build('coupon-user'), build(req.user.name));

  let discount = await redisClient.hgetallAsync(promoCode);

  if (!discount) {
    discount = await Coupon.findOne({ promoCode });
    // Cache the result to redis for better performance
    redisClient.hset(promoCode, discount.amount, discount.quantity);
  }

  if (counter) {
    return res.status(200).send({
      'status': 'ERROR',
      'message': `You already use this ${promoCode} promo code`
    })
  } else if (discount) {
    // Create a list for every user who already use the promo code
    redisClient.hset(build('coupon-user'), build(req.user.name), promoCode);

    return res.status(200).send({
      'status': 'OK',
      'message': `Your ${promoCode} promo code has been applied`
    })
  } else {
    return res.status(200).send({
      'status': 'ERROR',
      'message': `Invalid promo code ${promoCode}`
    })
  }
});

router.delete('/delete', (req, res) => {
  let { promoCode } = req.body;
  redisClient.hdel(build('coupon-user'), build(req.user.name));
  return res.status(200).send({
    'status': 'OK',
    'message': `Your ${promoCode} has been deleted`
  })
});

export default router;
