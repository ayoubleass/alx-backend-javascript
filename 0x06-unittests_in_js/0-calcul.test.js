const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', () => {
  it('checks equality', () => {
    assert.strictEqual(calculateNumber(5.20, 3.10), 8); 
  });
  
  it('checks if it rounds the number to the nearest int value', () => {
     assert.strictEqual(calculateNumber(4.20, 3.90), 8); 
  });
});
