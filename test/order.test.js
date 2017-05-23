import 'babel-polyfill'
import app from '../src/main'

const request = require('supertest')(app)
const expect = require('chai').expect

describe('test routes/order.js', async () => {

  let token = null
  let orderNumber = 'MTQ5NTUxNTIwMjgzMA'
  let trackingNumber = 'CGX9378NM'

  before(function async (done) {
    request.post('/user/login')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({ name: 'hamidiah', password: 'password' })
      .end(function (err, res) {
        if (!err) token = res.body.token
        request.post('/cart')
          .set('accept', 'application/json')
          .set('content-type', 'application/x-www-form-urlencoded')
          .set('authorization', 'Bearer ' + token)
          .send({ productId: 'SKU160745', quantity: '2' })
          .end((err, res) => {
            if (err) return done(err)
            done()
          })
      })
  })

  it('should return error when order number is invalid', (done) => {
    request.get('/order')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .query({ ref: orderNumber })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('ERROR')
        done()
      })
  })

  it('should put current cart to order', (done) => {
    request.post('/order')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ name: 'husnul anwari',
        phone: '081216866613',
        email: 'husnulhamidiah@gmail.com',
        address: 'jl.kaliurang km 5.5 no.112, depok, sleman, yogyakarta' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        orderNumber = res.body.orderNumber
        expect(res.body.orderNumber).to.not.equal(null)
        done()
      })
  })

  it('should return order details', (done) => {
    request.get('/order')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .query({ ref: orderNumber })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).to.not.equal(null)
        done()
      })
  })

  it('should save payment and verify the order', (done) => {
    request.post('/order/verify')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ orderNumber: orderNumber,
        name: 'Husnul Anwari',
        vendor: 'Bank Central Asia',
        reference: '6312930' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should return error when update order status by non admin', (done) => {
    request.post('/user/login')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({ name: 'husnulanwari', password: 'password' })
      .end(function (err, res) {
        request.post('/order/update')
          .set('accept', 'application/json')
          .set('content-type', 'application/x-www-form-urlencoded')
          .set('authorization', 'Bearer ' + res.body.token)
          .send({ orderNumber: 'orderNumber',
            status: 'non-confirmed',
            trackingNumber: trackingNumber })
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            expect(res.body.status).to.equal('ERROR')
            done()
          })
      })
  })

  it('should return error when order number is invalid', (done) => {
    request.post('/order/update')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ orderNumber: 'orderNumber',
        status: 'non-confirmed',
        trackingNumber: trackingNumber })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('ERROR')
        done()
      })
  })

  it('should return error when order status is invalid', (done) => {
    request.post('/order/update')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ orderNumber: orderNumber,
        status: 'non-confirmed',
        trackingNumber: trackingNumber })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('ERROR')
        done()
      })
  })

  it('should return ok when order status change (canceled)', (done) => {
    request.post('/order/update')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ orderNumber: orderNumber,
        status: 'canceled',
        trackingNumber: trackingNumber })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)    
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should return ok when order status change (confirmed)', (done) => {
    request.post('/order/update')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ orderNumber: orderNumber,
        status: 'confirmed',
        trackingNumber: trackingNumber })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)    
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should return ok when order status change (archieved)', (done) => {
    request.post('/order/update')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ orderNumber: orderNumber,
        status: 'archieved',
        trackingNumber: trackingNumber })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)    
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should return shipment detail when tracking shipment', (done) => {
    request.post('/order/track')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ trackingNumber: trackingNumber })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).to.not.equal(null)
        done()
      })
  })

  it('should return error when tracking snumber is invalid', (done) => {
    request.post('/order/track')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ trackingNumber: 'trackingNumber' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('ERROR')
        done()
      })
  })

  it('should return error when get all orders by non admin', (done) => {
    request.post('/user/login')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({ name: 'husnulanwari', password: 'password' })
      .end(function (err, res) {
        request.get('/order/all')
          .set('accept', 'application/json')
          .set('content-type', 'application/x-www-form-urlencoded')
          .set('authorization', 'Bearer ' + res.body.token)
          .send({ orderNumber: 'orderNumber',
            status: 'non-confirmed',
            trackingNumber: trackingNumber })
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            expect(res.body.status).to.equal('ERROR')
            done()
          })
      })
  })

  it('should return all orders in array', (done) => {
    request.get('/order/all')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .query({ ref: orderNumber })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).to.be.an('array')
        done()
      })
  })

})  
