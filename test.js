'use strict';

require('mocha');
const assert = require('assert');
const isOdd = require('./');

describe('isOdd', function() {
  it('should return true if the number is odd:', function() {
    assert(!isOdd(0));
    assert(!isOdd(2));
    assert(isOdd(1));
    assert(isOdd(3));
    assert(isOdd(-1));
    assert(isOdd(-3));
    assert(isOdd(1.0e0));
    assert(isOdd(9007199254740991));
  });

  it('should work with strings:', function() {
    assert(!isOdd('0'));
    assert(!isOdd('2'));
    assert(isOdd('1'));
    assert(isOdd('3'));
    assert(isOdd('1.0e0'));
    assert(isOdd('9007199254740991'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => isOdd(), /expected a number/);
    assert.throws(() => isOdd('foo'), /expected a number/);
    assert.throws(() => isOdd('1.1e0'), /expected an integer/);
    assert.throws(() => isOdd('9007199254740992'), /value exceeds maximum safe integer/);
    assert.throws(() => isOdd(9007199254740992), /value exceeds maximum safe integer/);
  });
});

describe('isOddInteger', function() {
  const isOddInteger = require('./').isOddInteger;

  it('should return true for odd integers (positive and negative):', function() {
    assert(isOddInteger(1));
    assert(isOddInteger(3));
    assert(isOddInteger(-1));
    assert(isOddInteger(-3));
    assert(isOddInteger(9007199254740991));
  });

  it('should return false for even integers, including -0:', function() {
    assert(!isOddInteger(0));
    assert(!isOddInteger(-0));
    assert(!isOddInteger(2));
    assert(!isOddInteger(-2));
    assert(!isOddInteger(9007199254740990));
  });

  it('should return false for unsafe large integers:', function() {
    assert(!isOddInteger(9007199254740992));
    assert(!isOddInteger(2 ** 60 + 1));
  });

  it('should return false for non-integer numbers:', function() {
    assert(!isOddInteger(1.1));
    assert(!isOddInteger(-1.5));
  });

  it('should return false for NaN, Infinity and non-number inputs:', function() {
    assert(!isOddInteger(NaN));
    assert(!isOddInteger(Infinity));
    assert(!isOddInteger(-Infinity));
    assert(!isOddInteger('1'));
    assert(!isOddInteger('foo'));
    assert(!isOddInteger(null));
    assert(!isOddInteger(undefined));
    assert(!isOddInteger(true));
    assert(!isOddInteger({}));
  });

  it('should never throw:', function() {
    [1, '1', 'foo', NaN, Infinity, null, undefined, {}, []].forEach(v => {
      assert.doesNotThrow(() => isOddInteger(v));
    });
  });

  it('should not change the default export isOdd:', function() {
    const isOdd = require('./');
    assert.strictEqual(typeof isOdd, 'function');
    assert(isOdd(1));
    assert(!isOdd(2));
    assert.throws(() => isOdd('foo'), /expected a number/);
    assert.throws(() => isOdd(9007199254740992), /value exceeds maximum safe integer/);
  });
});
