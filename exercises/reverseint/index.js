// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // make a string then reverse it
  const reversed = n.toString().split('').reverse().join('');
  // turn to number and take care of neg sign(-)
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
