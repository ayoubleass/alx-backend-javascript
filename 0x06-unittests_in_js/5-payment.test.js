const {expect, assert} = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');



describe('sendPaymentRequestToApii', () => {
   let logSpy;
   beforeEach(() => {
     if (logSpy) {
        logSpy.restore();
     }
     logSpy = sinon.spy(console, 'log');
   });
   
   after(() => {
     logSpy.restore();
   });
   
   it('should log 120', () => {
     sendPaymentRequestToApi(100, 20);
     expect(logSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
     expect(logSpy.calledOnce).to.be.true;
   });
   
   it('should log 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(logSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
  });
});
