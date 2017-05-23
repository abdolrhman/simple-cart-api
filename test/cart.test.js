import 'babel-polyfill'
import app from '../src/main'

const request = require('supertest')(app)
const expect = require('chai').expect

describe('test routes/cart.js', async () => {

  let token = null
  before(function async (done) {
    request.post('/user/login')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({ name: 'hamidiah', password: 'password' })
      .end(function (err, res) {
        if (!err) token = res.body.token
        done()
      })
  })

  it('should return user cart when success', (done) => {
    request.get('/cart')
      .set('accept', 'application/json')
      .set('authorization', 'Bearer ' + token)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).not.to.be.null
        done()
      })
  })

  it('should add product to cart', (done) => {
    request.post('/cart')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ productId: 'SKU160745', quantity: '2' })    
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should add product to cart without quantity spesified', (done) => {
    request.post('/cart')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ productId: 'SKU160745' })    
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should modify product in cart', (done) => {
    request.patch('/cart')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ productId: 'SKU160745', quantity: '2' })    
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should delete product from cart', (done) => {
    request.delete('/cart')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ productId: 'SKU160745' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should return error if deleted product not in cart', (done) => {
    request.delete('/cart')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ productId: 'XXX160745' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('ERROR')
        done()
      })
  })

  it('should add product to cart by patch', (done) => {
    request.patch('/cart')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ productId: 'SKU160745', quantity: '2' })    
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should delete product in cart when quantity is 0', (done) => {
    request.patch('/cart')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ productId: 'SKU160745', quantity: '-2' })    
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.status).to.equal('OK')
        done()
      })
  })

  it('should add product to cart by patch without quantity spesified ', (done) => {
    request.patch('/cart')
      .set('accept', 'application/json')
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Bearer ' + token)
      .send({ productId: 'SKU160745'})
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
