// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < (arr.length - i - 1); j++){
      if(arr[j] > arr[j + 1]){
        // swap elements
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

// [100, -40, 500, -124, 0, 21, 7]
function selectionSort(arr) {  // prove me wrong sort by always assuming i is the least in the array
  for(let i = 0; i < arr.length; i++){
    // assume i is least in the array assign i to indexMin
    let indexOfMin = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[indexOfMin]){
        indexOfMin = j;
      }
    }
    if(indexOfMin !== i){
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) { // takes array splits into two and merges together
  if(arr.length === 1){
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center); // up to and not including center index
  const right = arr.slice(center);


  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) { // take two sorted arrays and move them into one array
  const results = [];
  while( left.length && right.length){
    if(left[0] < right[0]){
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];// same as using concat()
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
