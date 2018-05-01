const assert = require('assert');
const thize = require('../index');

const specs = [
  {
    description: '0th',
    input: 0,
    expected: 'th',
  },
  {
    description: '1st',
    input: 1,
    expected: 'st',
  },
  {
    description: '2nd',
    input: 2,
    expected: 'nd',
  },
  {
    description: '3rd',
    input: 3,
    expected: 'rd',
  },
  {
    description: '4th',
    input: 4,
    expected: 'th',
  },
  {
    description: '8th',
    input: 8,
    expected: 'th',
  },
  {
    description: '11th',
    input: 11,
    expected: 'th',
  },
  {
    description: '12th',
    input: 12,
    expected: 'th',
  },
  {
    description: '13th',
    input: 13,
    expected: 'th',
  },
  {
    description: '16th',
    input: 16,
    expected: 'th',
  },
  {
    description: '19th',
    input: 19,
    expected: 'th',
  },
  {
    description: '21st',
    input: 21,
    expected: 'st',
  },
  {
    description: '22nd',
    input: 22,
    expected: 'nd',
  },
  {
    description: '111th',
    input: 111,
    expected: 'th',
  },
  {
    description: '115th',
    input: 115,
    expected: 'th',
  },
  {
    description: '51st',
    input: 51,
    expected: 'st',
  },
];

describe('thize', () => {
  specs.forEach(({ description, input, expected }) => {
    it(description, () => assert.equal(thize(input), expected));
  });

  it('should throw when input is not Number-ish', () => {
    assert.throws(() => {
      thize('not a number');
    }, Error, 'i is not a Number.')
  });
});
