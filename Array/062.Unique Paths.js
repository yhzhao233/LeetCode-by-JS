
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */



// 思路一： 深搜，当 m, n 较大时会超时
var uniquePaths = function(m, n) {
    const matrix = new Array(m).fill(1).map(item => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix[m - 1][n - 1];
};


/* 
          runtime                       memory
  第一版    76 ms(faster than 80.56%)    38.5MB(less than 81.37%)
*/
//思路二：动态规划，到点 a 的可能路线是到上一个点 b 和上一个点 c 的可能路线的和
var uniquePaths = function(m, n) {
    const matrix = new Array(m).fill(1).map(item => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix[m - 1][n - 1];
};