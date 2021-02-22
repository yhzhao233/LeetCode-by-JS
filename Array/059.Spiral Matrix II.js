/**
 * @param {number} n
 * @return {number[][]}
 */

  /* 
          runtime                       memory
  第一版    72 ms(faster than 93.24%)    38.7MB(less than 49.82%)
*/

 // 思路： 从外向内，一层层顺序遍历
var generateMatrix = function(n) {
    let count = 1;
    const result = new Array(n).fill(0).map(item => new Array(n));
    for (let layer = 0; layer < (n + 1) / 2; layer++) {
        for (let i = layer; i < n - layer; i++) {
            result[layer][i] = count++;
        }
        for (let j = layer + 1; j < n - layer; j++) {
            result[j][n - layer - 1] = count++;
        }
        for (let i = n - layer - 2; i >= layer; i--) {
            result[n - layer - 1][i] = count++;
        }
        for (let j = n - layer - 2; j > layer; j--) {
            result[j][layer] = count++;
        }
    }
    return result
};