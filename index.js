const thize = (i) => {
  i = Number(i) 
  if (Number.isNaN(i)) throw 'i is not a number.';

  switch (i) {
    case 0:
      return 'th';
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    case 11:
      return 'th';
    case 12:
      return 'th';
    case 13:
      return 'th';
    default:
      return thize(Number(String(i).slice(1)));
  }
};

module.exports = thize;
