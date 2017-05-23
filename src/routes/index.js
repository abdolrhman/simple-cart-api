import express from 'express';
import user from './user';
import cart from './cart';
import coupon from './coupon';
import order from './order';

import { ensureLogin } from './privilege';
import { swagDocHandler } from '../utils';

const router = new express.Router();

router.get('/', async (req, res) => {
  res.send({ msg: 'HELLO WORLD' });
});

// return swagger doc json data.
// open [http://swagger.daguchuangyi.com/?url=http://localhost:8888/swagger.json#!]
// to use Swagger UI to visualize the doc
router.get('/swagger.json', swagDocHandler);

router.use(ensureLogin);

// example user routes providing: [create|login|get] method.
router.use('/user', user);
router.use('/cart', cart);
router.use('/coupon', coupon);
router.use('/order', order);

export default router;
