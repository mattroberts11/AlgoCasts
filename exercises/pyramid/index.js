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

function pyramid(n) {
  // determine how many columns there will be
  let totalCols = n + (n - 1);
  let midpoint = Math.floor(totalCols / 2);

  for(let row = 0; row < n; row++) {
    let level = '';

    for(let col = 0; col < totalCols; col++){
      // if the col should have a #
      if( midpoint - row <= col && midpoint + row >= col) {
        // add # to level
        level += '#';
      } else {
      // else add a space to level
        level += ' ';
      }
    }
    // console log level
    console.log(level);
  }
}
// pyramid(4) // for debug
module.exports = pyramid;
