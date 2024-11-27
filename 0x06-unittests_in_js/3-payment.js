const utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const total = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
