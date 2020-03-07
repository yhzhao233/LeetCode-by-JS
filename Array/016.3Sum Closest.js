/** 
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * 
 * Example:
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
**/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 // 思路：排序然后从左向右扫，右侧两指针向中间扫，差距为0直接返回
 // 每组算出一个最小的diff和全局比较。当前sum大于target时右指针左移，sum小于target时左指针右移
var threeSumClosest = function(nums, target) {
  const arr = nums.sort((a, b) => a - b);
  let result = 0;
  let min = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    let sum = arr[i] + arr[left] + arr[right];
    let diff = Math.abs(sum - target);
    while (left < right) {
      let curSum = arr[i] + arr[left] + arr[right];
      let curDiff = Math.abs(curSum - target);
      if (curDiff < diff) {
        diff = curDiff;
        sum = curSum;
      }
      if (curDiff === 0) {
        return curSum;
      }
      if (curSum > target) {
        right --;
      } else if (curSum < target) {
        left ++;
      }
    }
    if (i === 0) {
      min = diff;
      result = sum;
    } else if (diff < min) {
      min = diff;
      result = sum;
    }
    while (i < arr.length - 3 && arr[i] === arr[i + 1]) {
      i++;
    }
  }
  return result;
};

// const nums = [-1, -1, 1, 1, 3];
// const target = -1;
const nums = [-55,-24,-18,-11,-7,-3,4,5,6,9,11,23,33];
const target = 0;
const result = threeSumClosest(nums, target);
console.log(result);