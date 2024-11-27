const {expect} = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == SUM', () => {
    it('adding two integers', () => {
      expect(calculateNumber('SUM', 4, 3)).to.equal(7);
    });
    it('adding two float numbers', () => {
      expect(calculateNumber('SUM', 4.20, 3.20)).to.equal(7);
    });
    it('adding negative numbers', () => {
      expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
    });
  });

  describe('type == SUBTRACT', () => {
    it('subtracting two integers', () => {
      expect(calculateNumber('SUBTRACT', 10, 3)).to.equal(7);
    });
    it('subtracting float numbers', () => {
      expect(calculateNumber('SUBTRACT', 10.5, 3.5)).to.equal(7);
    });
    it('subtracting with negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -5, -2)).to.equal(-3);
    });
  });

  describe('type == DIVIDE', () => {
    it('dividing two integers', () => {
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });
    it('dividing float numbers', () => {
      expect(calculateNumber('DIVIDE', 7.5, 2.5)).to.not.equal(3);
    });
    it('dividing by zero should return "Error"', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });
    it('dividing with negative numbers', () => {
      expect(calculateNumber('DIVIDE', -6, 3)).to.equal(-2);
    });
  });
});
