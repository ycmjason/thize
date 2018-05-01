const thize = (i) => {
  i = Math.abs(i);
  if (Number.isNaN(i)) throw new Error('i is not a number.');

  if (teen(i % 100)) return 'th';

  switch (i % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const teen = i => 10 < i && i < 20;

module.exports = thize;
