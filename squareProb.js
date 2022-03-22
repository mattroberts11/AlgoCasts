/*
TEXT BAR GRAPHS
You are working in a system that (like CoderPad) only allows for monospaced text output. Users need to share numbers that are better understood graphically. Create code to help them translate numerical data into visual bar graphs.

PART 1: HORIZONTAL BAR GRAPH
Given an array of integers, create a horizontal bar graph where each entry translates into a row of dashes of that length (from top to bottom). For example, dataset [2, 1, 0, 1, 2, 4, 6] renders as:

--
-

-
--
----
------

Note that the third output line is blank to represent the 0 value.

PART 2: VERTICAL BAR GRAPH
Your users prefer vertical bar graphs, where each integer entry is shown as a column of |s (from left to right). Implement that so the dataset from Part 1 renders as:

           i
      |    0 draw when 6
      |    1
     ||    2 draw when 4
     ||    3
|   |||    4 draw when 2
|| ||||    5
*/
const arr = [2, 1, 0, 1, 2, 4, 6];

const textBarGraphs = (arr) => {

  const cols = arr.length;
  const rows = Math.max(...arr);
  // console.log(cols);

  // iterate through input array
  for(let row = 0; row < rows; row++){
    // is there a pipe or a space
    let level = '';

    for(let col = 0; col < cols; col++){
      // rows   (total number of rows) 6
      // row      (row number) 2
      // arr[col] (value to compare) 4

      if (rows <= arr[col] + row) {
        level += '|';
      } else {
        level += ' ';
      }
    }
   console.log(level);


  }

}

textBarGraphs(arr);

// for(let i = 0; i < arr.length; i++){
//     let bar = ''

//     for(let j = 0;  j < arr[i]; j++){
//      // need to account for 0
//       bar += '-';

//     }
//     console.log(bar);
//   }