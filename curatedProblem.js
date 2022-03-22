
const arr = [20, 5, 5, 10, 2, 30, 2]; // with duplicates

const  transformOrder = (arr) => {

  const result = [];

  let arrCopy = [...arr];
  let sorted = arr.sort((a, b) => a - b);
  // create unique array so we have a good map of indexes
  let unique = [...new Set(sorted)]

  const objMap = {};
  // // create map of indexes of sorted
  for( let i = 0; i < unique.length; i++) {
    objMap[unique[i]] = i
  }

  // take the copy and add the index if it was ordered to result
  for(let j = 0; j < arrCopy.length; j++){
    // [20, 5, 5, 10, 2, 30, 2] =  [3, 1, 1, 2, 0, 4 0]
    let objKey = arrCopy[j].toString();
    if(objKey in objMap){
      result.push(objMap[objKey])
    }
  }
  console.log('result', result);
}

transformOrder(arr);