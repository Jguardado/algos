// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '', index = 0) {
  const center = Math.floor((2 * n - 1) / 2)
  if (row === n) {
    return;
  };

  if (level.length === n * 2 - 1) {
    console.log(level);
    return pyramid(n, row + 1)
  };

  if (center - row <= index && center + row >= index) {
    level += "#";
  } else {
    level += " ";
  }

  pyramid(n, row, level, index + 1)
}

module.exports = pyramid;


// const center = Math.floor((2 * n - 1) / 2);
//
// for (let row = 0; row < n; row++) {
//   let level = '';
//   for (let column = 0; column < n * 2 - 1; column++) {
//     if(center - row <= column && center + row >= column) {
//       level += "#";
//     } else {
//       level += " ";
//     }
//   }
//   console.log(level);
// }
