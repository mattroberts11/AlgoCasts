// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create empty chunked array
  const chunked = [];
  let index = 0;

  while(index < array.length){
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
// chunk([1, 2, 3, 4], 2)
module.exports = chunk;


// function chunk(array, size) {
//   // need an array container to push results to
//   const chunked = [];
//   // iterate through array
//   for( let element of array){
//     // retrieve last element in chunked
//     const last = chunked[chunked.length - 1];
//     // if last element does not exist, or it's length is === to chunk size
//     if(!last || last.length === size) {
//       // push a new chunk into chunked with the current element
//       chunked.push([element]);
//     } else {
//     // else add the current element into the chunk
//       last.push(element);
//     }
//   }
//   // return the new array with sub arrays
//   return chunked;
//   // console.log(newArr);
// }