// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace('/[^\w]/g', '').toLowerCase().split('').sort().join('')
}

anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')

module.exports = anagrams;

// NOTE: GRider's first solution:
// function anagrams(stringA, stringB) {
//   // run regex on strings
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);
//
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }
//   for (let letter in charMapA) {
//     if (charMapA[letter] !== charMapB[letter]) {
//       return false;
//     }
//   }
//   return true
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for(let char of str.replace('/[^\w]/g', '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap
// }


//NOTE: my original solution (long);
// run regex on strings
// const cleanStringA = stringA.replace('/[^\w]/g', '').split('')
// const cleanStringB = stringB.replace('/[^\w]/g', '').split('')
// const charMapA = {};
// const charMapB = {};
//
// if (cleanStringA.length === cleanStringB.length) {
//   for (let char of cleanStringA) {
//     charMapA[char] = charMapA[char] + 1 || 1;
//   }
//
//   for (let char of cleanStringB) {
//     charMapB[char] = charMapB[char] + 1 || 1;
//   }
//
//   for (let letter in charMapA) {
//     if (charMapA[letter] !== charMapB[letter]) {
//       return false;
//     }
//   }
//   return true;
// }
// return false;
