const thize = (i) => {
  i = Number(i);
  if (Number.isNaN(i)) throw new Error('i is not a number.');

  if (!teen(i % 100)) {
    switch (i % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
    }
  }

  return 'th';
};

const teen = (i) => { return 10 < i && i < 20 };

module.exports = thize;
