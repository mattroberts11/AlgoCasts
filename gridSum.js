/**
 * @param {number[][]} grid
 * @return {number}
 */

 var minPathSum = function(grid) {

  let smallestRowSum = Infinity;
  let smallestColSum = Infinity;
  // iterate over main array
  let currRowSum = 0;

  let numRows = grid.length;

  for(let i = 0; i < grid.length; i++){

      // let currRowSum = grid[i].reduce((prev, curr) => prev + curr);

      // if(currRowSum < smallestRowSum ){
      //     smallestRowSum = currRowSum;
      // }

      // let currColSum = 0;
      // let j = 0;
      // while(j < numRows - 1){
      //     currColSum += grid[1][j];
      //     j++;
      // }
      // if(currColSum < smallestColSum){
      //     smallestColSum = currColSum
      // }
  }
  // return smallestRowSum + smallestColSum;
  console.log(smallestRowSum + smallestColSum);
};


const grid = [[1,3,1],[1,5,1],[4,2,1]]; // answer = 7
const grid2 = [[1,2],[1,1]] // answer 4
minPathSum(grid2);