/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 /* 
         runtime                       memory
 第一版    56 ms(faster than 66.77%)    35.6MB(less than 10.00%)
*/

// 思路：可重复，升序，要求 O(log n)。那么直接二分找，找到之后继续向两侧二分
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    const result = [-1, -1];
    recursive(left, right);
    return result;
    function recursive(left, right) {
      if (left > right) {
        return;
      }
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        if (nums[mid - 1] !== target) {
          result[0] = mid;
        } else {
          recursive(left, mid - 1);
        }
        if (nums[mid + 1] !== target) {
          result[1] = mid;
        } else {
          recursive(mid + 1, right);
        }
      } else if (nums[mid] < target) {
        recursive(mid + 1, right);
      } else {
        recursive(left, mid - 1);
      }
    }
};

const nums = [5,7,7,8,8,10];
const target = 6;
console.log(searchRange(nums, target));
