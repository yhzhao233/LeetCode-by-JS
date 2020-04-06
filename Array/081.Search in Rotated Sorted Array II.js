/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false

Follow up:

This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
Would this affect the run-time complexity? How and why?
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

/* 
         runtime                       memory
 第一版    52 ms(faster than 93.06%)    34.7MB(less than 100%)
*/

// 思路：基于题目033, 数字可以重复，就不能只考虑一侧的情况，当 middle 和 left 值相同时，需要同时对两侧处理，使用递归
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  return recursive(left, right);
  function recursive(left, right) {
    if (left > right) {
      return false;
    }
    const middle = Math.floor((left + right) / 2);
    const middleNum = nums[middle];
    if (nums[left] === target || nums[middle] === target || nums[right] === target) { return true }
    if (middleNum < nums[left]) {
      // right is sorted
      if (nums[right] > target && target > middleNum) {
        return recursive(middle + 1, right);
      } else {
        return recursive(left, middle - 1);
      }
    } else if (middleNum > nums[left]) {
      // left is sorted
      if (nums[left] < target && target < middleNum) {
        return recursive(left, middle - 1);
      } else {
        return recursive(middle + 1, right);
      }
    } else {
      // while middleNum === nums[left], both sides need to be considered
      return recursive(left, middle - 1) || recursive(middle + 1, right);
    }
  }
}


const nums = [1, 1, 3, 1];
const target = 3;


console.log(search(nums, target));