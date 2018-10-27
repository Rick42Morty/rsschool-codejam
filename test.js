const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');

describe('sumOfOther function', () => {
  it('Should work with valid array', () => {
    const arr = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(arr, [8, 7, 6, 9]);
  });
  it('Should return empty array, if an empty array is passed', () => {
    const arr = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(arr, [8, 7, 6, 9]);
  });
  it('Should return initial array, if an array with length 1 is passed', () => {
    const arr = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(arr, [8, 7, 6, 9]);
  });
});

describe('make function', () => {
  it('Should work with sum function', () => {
    function sum(a, b) {
      return a + b;
    }
    const ans = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(ans, 777);
  });

  it('Should return "not enough arguments" message if number of number args is less than two', () => {
    function sum(a, b) {
      return a + b;
    }
    const ans = make(15)(sum);
    assert.deepEqual(ans, "not enough arguments");
  });

  it('Should work fine with two number arguments', () => {
    function sum(a, b) {
      return a + b;
    }
    const ans = make(21, 21)(sum);
    assert.deepEqual(ans, 42);
  });

  it('Should work with product function', () => {
    function prod(a, b) {
      return a * b;
    }
    const ans = make(5)(3, 4)(1, 2)(1, 1, 1)(7)(prod);
    assert.deepEqual(ans, 840);
  });

});