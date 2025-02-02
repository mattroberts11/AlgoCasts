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


function steps(n) {
  // first for loop is the row
  for(let row = 0; row < n; row++){
    // creates the stair to console log out each row
    let stair = '';
    // this creates the column
    for(let col = 0; col < n; col++){
      // if row is <= col add a #
      if(col <= row){
        stair += '#';
      // else add a space b/c col is greater than row
      } else {
        stair += ' ';
      }
    }
    // log out the stair/row
    console.log(stair)
  }
}
// steps(3);

module.exports = steps;



// function steps(n, row = 0, stair = '') {

//   if(n === row) {
//     return;
//   };

//   if(n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   if(stair.length <= row){
//     stair += '#'
//   }else{
//     stair += ' ';
//   }
//   steps(n, row, stair)
// }