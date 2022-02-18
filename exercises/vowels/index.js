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
  return matches ? matches.length : 0;
}

module.exports = vowels;


// function vowels(str) {
//   // create array of vowels to compare agains
//   const vowelArr = ['a', 'e', 'i', 'o', 'u'];
//   // create result variable to return
//   let result = 0;
//   // to compare everything should be lower case
//   // iterate over string
//   for( const char of str.toLowerCase()){
//     if(vowelArr.includes(char)){
//       result++;
//     }
//   }

//   return result;
// }