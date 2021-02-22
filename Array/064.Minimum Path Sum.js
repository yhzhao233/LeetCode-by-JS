/**
 * @param {number[][]} grid
 * @return {number}
 */

 
 /* 
          runtime                       memory
  第一版    80 ms(faster than 86.63%)    38.9MB(less than 95.05%)
*/
//思路一：动态规划，从左上到右下，到每个点的最小路径必为 从左/上到这个点的路径中的较小一条
var minPathSum = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            let top = i === 0 ? Infinity : grid[i - 1][j];
            let left = j === 0 ? Infinity : grid[i][j - 1];
            
            let min = Math.min(top, left);
            grid[i][j] = grid[i][j] + min;
        }
    }
    return grid[n - 1][m - 1];
};