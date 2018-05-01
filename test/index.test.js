const assert = require('assert');
const thize = require('../index');

const specs = [
  {
    description: '0th',
    input: 0,
    suffix: 'th',
  },
  {
    description: '1st',
    input: 1,
    suffix: 'st',
  },
  {
    description: '2nd',
    input: 2,
    suffix: 'nd',
  },
  {
    description: '3rd',
    input: 3,
    suffix: 'rd',
  },
  {
    description: '4th',
    input: 4,
    suffix: 'th',
  },
  {
    description: '8th',
    input: 8,
    suffix: 'th',
  },
  {
    description: '11th',
    input: 11,
    suffix: 'th',
  },
  {
    description: '12th',
    input: 12,
    suffix: 'th',
  },
  {
    description: '13th',
    input: 13,
    suffix: 'th',
  },
  {
    description: '16th',
    input: 16,
    suffix: 'th',
  },
  {
    description: '19th',
    input: 19,
    suffix: 'th',
  },
  {
    description: '21st',
    input: 21,
    suffix: 'st',
  },
  {
    description: '22nd',
    input: 22,
    suffix: 'nd',
  },
  {
    description: '111th',
    input: 111,
    suffix: 'th',
  },
  {
    description: '115th',
    input: 115,
    suffix: 'th',
  },
  {
    description: '51st',
    input: 51,
    suffix: 'st',
  },
];

describe('thize', () => {
  specs.forEach(({ description, input, suffix }) => {
    it(description, () => assert.equal(thize(input), input + suffix));
  });
});

describe('thize.suffix', () => {
  specs.forEach(({ description, input, suffix }) => {
    it(description, () => assert.equal(thize.suffix(input), suffix));
    it(`Negative ${description}`, () => assert.equal(thize.suffix(-input), suffix));
  });

  it('should throw an Error when input is not a Number', () => {
    assert.throws(() => { thize('not a number'); }, Error);
  });

  it('should throw an Error when input is not an Integer', () => {
    assert.throws(() => { thize('51.3'); }, Error);
  });
});
