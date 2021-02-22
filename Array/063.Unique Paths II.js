/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */


 /* 
          runtime                       memory
  第一版    76 ms(faster than 93.06%)    38.5MB(less than 96.17%)
*/
//思路一：动态规划，到点 a 的可能路线是到上一个点 b 和上一个点 c 的可能路线的和。在062的基础上，如果点 a 处有障碍，则到达 a 的可能路线为 0
//注意：和 62 的区别是不能直接从 1，1开始走了，需要考虑 (0,0) (0, n) (m, 0)有障碍的可能
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                obstacleGrid[i][j] = 1 - obstacleGrid[i][j];
            } else {
                const left = i >= 1 ? obstacleGrid[i - 1][j] : 0;
                const right = j >= 1 ? obstacleGrid[i][j - 1] : 0;
                obstacleGrid[i][j] = obstacleGrid[i][j] === 1 ? 0 : (left + right);
            }
        }
    }
    return obstacleGrid[m - 1][n - 1];
};