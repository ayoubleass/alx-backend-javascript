const { assert } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber using stub', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const logSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    assert(stub.calledOnceWithExactly('SUM', 100, 20));
    assert(logSpy.calledWith('The total is: 10'));
    logSpy.restore();
    stub.restore();
  });
});

