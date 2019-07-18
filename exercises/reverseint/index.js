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
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

reverseInt(-15)

module.exports = reverseInt;

// Very specific string version (not good)
// if(Math.sign(n) === -1) {
//   const numWithoutNeg = n.toString().split('');
//   numWithoutNeg.shift();
//   return parseInt('-' + numWithoutNeg.reverse().join(''));
// }
// return parseInt(n.toString().split('').reverse().join(''))
