const assert = require('chai').assert;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber'); 
    sendPaymentRequestToApi(100, 20);
    assert(utilsSpy.calledOnceWithExactly('SUM', 100, 20)); 
    utilsSpy.restore();
  });

  it('should log the correct total', () => {
    const logSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    assert(logSpy.calledWith('The total is: 120'));
    logSpy.restore();
  });
});

