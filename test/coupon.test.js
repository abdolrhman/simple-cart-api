import 'babel-polyfill'
import app from '../src/main'

const request = require('supertest')(app)
const expect = require('chai').expect

describe('test routes/coupon.js', async () => {

  let token = null
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

  it('should return error when promo code is invalid', (done) => {
    request.post('/coupon')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ promoCode: 'SLASC30' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('ERROR')
        done()
      })
  })

  it('should add coupon to exsisting cart', (done) => {
    request.post('/coupon')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ promoCode: 'PUASA30' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should return error when user use a coupon twice', (done) => {
    request.post('/coupon')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ promoCode: 'PUASA30' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('ERROR')
        done()
      })
  })

  it('should delete coupon from exsisting cart', (done) => {
    request.delete('/coupon')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ promoCode: 'PUASA30' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  after(function async (done) {
    request.delete('/cart')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ productId: 'SKU160745' })
      .end(function (err, res) {
        if (!err && res.body.status === 'OK') done()
      })
  })

})  
