import express from 'express';
import _ from 'lodash';

import { Product } from 'models';
import { redisClient } from 'utils';

const router = new express.Router();

const build = (username) => 'rkey-' + username;

router.get('/', async (req, res) => {
  let result = await redisClient.hgetallAsync(build(req.user.name));

  let cartItems = _.map(result, (value, prop) => {
    return { product: prop, quantity: value };
  });

  return res.status(200).send({
    'status': 'OK',
    'cart_id': build(req.user.name),
    'cart': cartItems,
    'message': null
  })
});

router.post('/add', async (req, res) => {
  let { productId, quantity } = req.body;
  if (!quantity) quantity = 1;

  let result = await redisClient.hgetallAsync(build(req.user.name));

  if (_.has(result, productId)) {
    redisClient.hincrby(build(req.user.name), productId, quantity, (err, res) => {
      if (_.toInteger(result[productId]) + _.toInteger(quantity) <= 0) {
        redisClient.hdel(build(req.user.name), productId);
      }
    });   
  } else {
    redisClient.hmset(build(req.user.name), productId, quantity);    
  }

  result = await redisClient.hgetallAsync(build(req.user.name));

  let cartItems = _.map(result, (value, prop) => {
    return { product: prop, quantity: value };
  });

  return res.status(200).send({
    'status': 'OK',
    'cart_id': build(req.user.name),
    'cart': cartItems,
    'message': null
  })
});

export default router;
