import express from 'express';
import _ from 'lodash';
import base64 from 'base-64';

import { Order, Payment } from 'models';
import { helper } from 'utils';

const router = new express.Router();

router.get('/', async (req, res) => {
  let { ref } = req.query

  let order = await await Order.findOne({ orderNumber: ref })

  return res.status(200).send(order)
});

router.post('/', async (req, res) => {
  let { name, phone, email, address } = req.body
  let shipping = { name, phone, email, address };
  let orderNumber = { orderNumber: base64.encode(Date.now()) };
  let payment = {
    method: 'Bank Transfer',
    vendor: 'Bank Central Asia',
    reference: '6129305'
  }

  // TODO: modify updateCartAsync so it can take status argument
  let cart = await helper.updateCartAsync(req.user.name)
  cart.status = 'waiting payment'
  cart = _.omit(_.assign(cart, { shipping, payment }, orderNumber), 'orderId')

  let order = new Order(cart);
  order = await order.save();

  return res.status(200).send(order);
});

router.post('/track', async (req, res) => {
  let { trackingNumber } = req.body
  let order = await Order.findOne({ 'shipping.trackingNumber': trackingNumber });
  return res.status(200).send(_.omit(order.toJSON(), ['products', 'payment', 'coupon', 'user']));
});

router.post('/verify', async (req, res) => {
  let { orderNumber, name, vendor, reference } = req.body
  let verification = { 
    order: orderNumber,
    name: name,
    vendor: vendor,
    reference: reference
  }

  let payment = new Payment(verification);
  payment = await payment.save();

  return res.status(200).send({
    'status': 'OK',
    'message': `Your payment for ${orderNumber} is being verified`
  });
});

router.get('/all', async (req, res) => {
  let order = await await Order.find({})

  return res.status(200).send(order)
});

router.post('/update', async (req, res) => {
  let { orderNumber, status, trackingNumber } = req.body
  let order = await Order.findOne({ orderNumber });

  if (!order) {
    return res.status(200).send({
      'status': 'ERROR',
      'message': `Order ${orderNumber} not found`
    });
  }

  if (status === 'confirmed') {
    order.status = status
    _.assign(order.shipping, { trackingNumber, status: 'shipped' });
  } else if (status === 'canceled') {
    order.status = status
  } else if (status === 'archieved') {
    order.status = status
    _.assign(order.shipping, { status: 'delivered' });  
  } else {
    return res.status(200).send({
      'status': 'ERROR',
      'message': `Invalid status ${status}`
    });
  }

  await order.save();  
  return res.status(200).send({
    'status': 'OK',
    'message': `The order's status has been set to ${status}`
  });
});

export default router;
