// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1)
  }

  if (stair.length <= row) {
    stair += "#"
  } else {
    stair += ' ';
  }
  steps(n, row, stair)
}

steps(3)

module.exports = steps;

// Griders first solution
// for(let row = 0; row < n; row++) {
//   let stair = '';
//
//   for(column = 0; column < n; column++) {
//     if(column <= row) {
//       stair += '#';
//     } else {
//       stair += " "
//     }
//   }
//
//   console.log(stair)
// }


// NOTE: orignal approach but I wasnt getting teh expect result. one off errors
// for(let i = 1; i <= n; i++) {
//   let outputString = '';
//   let numOfPounds = 0
//   while(numOfPounds <= i) {
//     outputString += '#'
//     numOfPounds++
//     debugger;
//   }
//   while(outputString.length <= n) {
//     outputString += ' '
//   }
//   console.log(outputString);
// }
