// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// const str = 'leppa';
//== SOLUTION 1
// function reverse(str) {
//   // the easy way if you know your JavaScript
//   return str.split('').reverse().join('');
// }
//== SOLUTION 2
// function reverse(str) {
//   // for each loop
//   let result = '';
//   // create array out of the string
//   let arr = str.split('');
//   let revArr = [];
//   // reverse the array
//   for(let x = arr.length - 1; x >= 0; x--){
//     // build new array by starting at end of arr
//     revArr.push(arr[x]);
//   }
//   result = revArr.join('');
//   return result;
// }
//== SOLUTION 3
// function reverse(str) {
//     // A string is like an array
//     let reversed = '';
//     for( let x = str.length - 1; x >= 0; x--){
//       reversed += str[x]; // using bracket notation ==> can also use charAt(x)
//     }
//     return reversed;
// }

//== SOLUTION 4  for of loop
function reverse(str) {
  // A string is like an array
  let reversed = '';
  for(let character of str ){
    reversed  = character + reversed; // using bracket notation ==> can also use charAt(x)
  }
  return reversed;
}

module.exports = reverse;
