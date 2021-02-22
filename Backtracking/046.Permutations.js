/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 
/* 
          runtime                       memory
  第一版    100 ms(faster than 40.36%)    43.5MB(less than 14.07%)
*/

//思路：深度优先搜索，[1,2,3] 可拆解为
// 1 和 [2,3] 的全排列
// 2 和 [1,3] 的全排列
// 3 和 [1,2] 的全排列
// 继续递归

var permute = function(nums) {
    const result = [];
    const dfs = (cur, res = []) => {
        if (cur.length === 0) result.push(res);
        for (let i = 0; i < cur.length; i++) {
            dfs([...cur.slice(0, i), ...cur.slice(i + 1)], [...res, cur[i]]);
        }
    }
    dfs(nums, []);
    return result;
};