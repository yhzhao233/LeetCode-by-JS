/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* 
          runtime                       memory
  第一版    72 ms(faster than 6.77%)    34.1MB(less than 7.69%)
  第二版    52 ms(faster than 85.61%)   33.8MB(less than 53.85%)
*/
// 思路：要求 O(log n)，那如果 先找轴再二分最坏就会是nlogn，还是直接二分，区分一下情况
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    if (target < nums[left] && target > nums[right]) {
      return result;
    }
    if (target === nums[left]) {
      return left;
    } else if (target === nums[right]) {
      return right;
    }
    let inLeft = nums[left] <= target;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const middleNum = nums[middle];
      if (middleNum === target) {
         return middle;
      }
      if (middle === left) {
        break;
      }
      if (middleNum < nums[0]) {
        if (inLeft || target < middleNum) {
          right = middle;
          continue;
        } else {
          left = middle;
          continue;
        }
      } else {
        if (inLeft && target < middleNum) {
          right = middle;
          continue;
        } else {
          left = middle;
          continue;
        }
      }
    }
    return result;
};

//第二版，合并处理的条件
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleNum = nums[middle];
    if (nums[left] === target) { return left; }
    if (nums[middle] === target) { return middle; }
    if (nums[right] === target) { return right; }
    if (middleNum < nums[left]) {
      // right is sorted
      if (nums[right] > target && target > middleNum) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      // left is sorted
      if (nums[left] < target && target < middleNum) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  return result;
};


// const nums = [4,5,6,7,0,1,2];
// const target = 3;
const nums = [11, 12,1,2,3,5,6,7,8];
const target = 9;


console.log(search(nums, target));
