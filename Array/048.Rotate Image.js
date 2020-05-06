/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/* 
         runtime                       memory
 第一版    48 ms(faster than 96.01%)    33.8MB(less than 89.47%)
*/

// 思路，外圈向内圈，一次转4个。需要计算互换位置的四个坐标点的坐标。
var rotate = function (matrix) {
  const n = matrix.length - 1;
  const stop = Math.floor(n / 2);
  let y = 0;
  while (y <= stop) {
    let begin = y;
    let end = n - y - 1;
    let index = begin;
    while (index <= end && index >= begin) {
      let cur = matrix[y][index];
      let temp = matrix[y][index];
      for (let i = 0; i < 4; i++) {
        if (i === 0) {
          cur = matrix[index][n - y];
          matrix[index][n - y] = temp;
          temp = cur;
        } else if (i === 1) {
          cur = matrix[n - y][n - index];
          matrix[n - y][n - index] = temp;
          temp = cur;
        } else if (i === 2) {
          cur = matrix[n - index][y];
          matrix[n - index][y] = temp;
          temp = cur;
        } else if (i === 3) {
          matrix[y][index] = temp;
        }
      }
      index++;
    }
    y++;
  }
};

// const matrix = [
//   [5, 1, 9, 11, 21],
//   [2, 4, 8, 10, 22],
//   [13, 3, 6, 7, 23],
//   [15, 14, 12, 16, 24],
//   [25, 26, 27, 28, 29]
// ];
// const matrix = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16]
// ];
const matrix = [
  [1, 2 ,3,4, 5],
  [6, 7 ,8,9, 10],
  [11,12,13,14, 15],
  [16, 17,18,19, 20],
  [21,22,23,24,25]
];

rotate(matrix);
console.log(matrix);