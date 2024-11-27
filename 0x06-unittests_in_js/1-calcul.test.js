const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
  describe('type == SUM', () => {
    it('adding two integers', () => {
      assert.equal(calculateNumber('SUM', 4, 3), 7);
    });
    it ('addding two floats nums', () => {
      assert.strictEqual(calculateNumber('SUM', 4.20, 3.20), 7);
    });
    it ('adding negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1, -1), -2);
    });
  });
  describe('type == SUBTRACT', () => {
    it('subtracting two integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 10, 3), 7);
    });
    it('subtracting float numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 10.5, 3.5), 7);
    });
    it('subtracting with negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5, -2), -3);
    });
  });
  describe('type == DIVIDE', () => {
    it('dividing two integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    });
    it('dividing float numbers', () => {
      assert.notEqual(calculateNumber('DIVIDE', 7.5, 2.5), 3);
    });
    it('dividing by zero should return "Error"', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
    });
    it('dividing with negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6, 3), -2);
    });	
  });
});
