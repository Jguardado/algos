// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0
}

module.exports = vowels;

// First solutions:

// const vowelString = 'aeiou';
// let count = 0;
//
// for (let letter of str) {
//   if (vowelString.includes(letter)) {
//     count++
//   }
// }
// return count;


//NOTE: original solutions
// const vowels = {
//   a: true,
//   e: true,
//   i: true,
//   o: true,
//   u: true
// };
//
// let count = 0
// for (let letter of str) {
//   if (vowels[letter.toLowerCase()]) {
//     count++
//   }
// }
// return count;
