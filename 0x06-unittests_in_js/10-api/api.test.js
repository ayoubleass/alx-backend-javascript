const request = require('request');
const { expect } = require('chai');


describe('Testing api response', () => {
  it('testing the request status and if the result is correct', (done) => {
   const res = request.get('http://localhost:7865', (err, res, body) => {
     expect(res.statusCode).to.be.equal(200);
     expect(body).to.be.equal('Welcome to the payment system');
     done();
   });
  });

  it('testing /card end point', (done) => {
    const res = request.get('http://localhost:7865/cart/1', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 1');
      done();
    });
  });

 it('testing /card end point using a non num value to the url', (done) => {
   request.get('http://localhost:7865/cart/-12', (_err, res, _body) => {
     expect(res.statusCode).to.be.equal(404);
     done();
   });
 });
  it('testing /available_payments end point', (done) => {
    const res = request.get('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });

  it('testing /login end point', (done) => {
    const res = request.post('http://localhost:7865/login', {json: {userName: 'jhon'}}, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome jhon');
      done();
    });
  });
});
