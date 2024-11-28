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
});
