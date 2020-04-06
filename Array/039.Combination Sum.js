/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 /* 
         runtime                       memory
 第一版    108 ms(faster than 17%)    36.7 MB(less than 66%)
*/
// 思路：从左边开始，递归，一个数组保存值。
var combinationSum = function(candidates, target) {
  const len = candidates.length;
  const stack = [];
  const res = [];
  recursive(0, target);
  return res;
  function recursive(index, remain) {
    if (remain === 0) {
      res.push([...stack]);
    }
    if (index === len) {
      return;
    }
    if (remain <= 0) {
      return;
    }
    stack.push(candidates[index]);
    recursive(index, remain - candidates[index]);
    stack.pop();
    recursive(index + 1, remain)
  }
};

// const candidates = [2,3,6,7];
// const target = 7;

const candidates = [2,3,5];
const target = 8;
console.log(combinationSum(candidates, target));
