/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /* 
          runtime                       memory
  第一版    100 ms(faster than 59.23%)    44.9MB(less than 40.49%)
*/

//思路：深度优先搜索，在 046 的基础上，每一层去重，然后计算
var permuteUnique = function(nums) {
    const result = [];
    const dfs = (cur, res = []) => {
        if (cur.length === 0) result.push(res);
        const obj = {};
        for (let i = 0; i < cur.length; i++) {
            if (obj[cur[i]]) continue;
            obj[cur[i]] = true;
            dfs([...cur.slice(0, i), ...cur.slice(i + 1)], [...res, cur[i]]);
        }
    }
    dfs(nums, []);
    return result;
};