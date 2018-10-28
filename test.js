const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

describe('sumOfOther function', () => {
  it('Should work with valid array', () => {
    const arr = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(arr, [8, 7, 6, 9]);
  });
  it('Should return empty array, if an empty array is passed', () => {
    const arr = sumOfOther([]);
    assert.deepEqual(arr, []);
  });
  it('Should return initial array, if an array with length 1 is passed', () => {
    const arr = sumOfOther([2]);
    assert.deepEqual(arr, [2]);
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
  it('Should return "not enough arguments" string if number of number args is less than two', () => {
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

describe('recursion function', () => {
  it('Should work with example full BST tree', () => {
    let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
    let ans = recursion(tree);
    assert.deepEqual(ans, [[100], [90, 120], [70,99,110,130]]);
  });
  it('Should work with non-full binary tree', () => {
    let tree = {"value":100,"left":{"value":90,"left":{"value":70, "right":{"value":1}},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130, "right":{"value":2}}}};
    let ans = recursion(tree);
    assert.deepEqual(ans, [[100], [90, 120], [70,99,110,130], [1, 2]]);
  });
  it('Should work with binary tree with arbitrary values (strings, numbers, boolean)', () => {
    let tree = {"value":42,"left":{"value":"Rick","left":{"value":true},"right":{"value":99}},"right":{"value":"Morty","left":{"value":false},"right":{"value":130}}};
    let ans = recursion(tree);
    assert.deepEqual(ans, [[42], ["Rick", "Morty"], [true,99,false,130]]);
  });
  it('Should work with unbalansed tree', () => {
    let tree = {"value":"This","left":{"value":"tree","left":{"value":"has", "left": {"value":"only", "left": {"value":"left", "left": {"value":"nodes"}}}}}};
    let ans = recursion(tree);
    assert.deepEqual(ans, [["This"], ["tree"], ["has"], ["only"], ["left"], ["nodes"]]);
  });
});