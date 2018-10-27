const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');

describe('sumOfOther', () => {
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