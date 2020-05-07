/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

 /* 
         runtime                       memory
 第一版    52 ms(faster than 71.44%)    33.8MB(less than 45%)
*/

// 思路：由外向内转圈，每圈顺时针走四个方向，特殊情况如一圈只有一行或一列时，不走最后两个方向
var spiralOrder = function(matrix) {
  const m = matrix.length - 1;
  if (m < 0) {
    return []
  }
  const n = matrix[0].length - 1;
  const arr = [];
  const row = [0, n];
  const col = [0, m];
  while (row[0] <= row[1] && col[0] <= col[1]) {
    for(let i = row[0]; i <= row[1]; i++) {
      arr.push(matrix[col[0]][i]);
    }
    for(let i = col[0] + 1; i <= col[1]; i++) {
      arr.push(matrix[i][row[1]]);
    }
    if (row[0] >= row[1] || col[0] >= col[1]) {
      break;
    }
    for(let i = row[1] - 1; i >= row[0]; i--) {
      arr.push(matrix[col[1]][i]);
    }
    for(let i = col[1] - 1; i > col[0]; i--) {
      arr.push(matrix[i][row[0]]);
    }
    row[0]++;
    row[1]--;
    col[0]++;
    col[1]--;
  }
  return arr;
};
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12],
//   [13, 14, 15, 16]
// ]
// const matrix = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
//  ]
// const matrix = [
//   [7],
//   [ 9 ],
//   [ 6 ]
//  ]

// const matrix = [
//   [2,5],
//   [8,4],
//   [0,-1]
// ]
// const matrix = [[1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19],[10,20]]

console.log(spiralOrder(matrix));
