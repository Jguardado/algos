// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  chars = {};
  for (let char of str) {
    chars[char] = chars[char]++ ||  1;
  };

  let letFrequency = 0;
  let maxChar;
  for (let letter in chars) {
    if(chars[letter] > letFrequency) {
      letFrequency = chars[letter];
      maxChar = letter
    }
  }
  return maxChar;
}

maxChar('catatsttsts')

module.exports = maxChar;
