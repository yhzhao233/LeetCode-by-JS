// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 思路：排序，左侧出发i，j从i+1出发，k每次从右侧向左扫。即拆解成判断右侧两指针之和的问题
// 例： [-4, -1, -1, 0, 1, 2]
var threeSum = function(nums) {
    let arr = nums.sort((a, b) => a - b);
    let len = arr.length;
    let res = [];
    for (let i = 0; i < len - 2; i++) {
      const a = arr[i];
      if (a > 0) { break };
      if (i > 0 && a === arr[i - 1]) {
        continue;
      }
      let left = i + 1;
      let right = len - 1;
      while (left < right) {
        if (left > i + 1 && arr[left] === arr[left - 1]) {
          left++;
          continue;
        }
        if (right < len - 1 && arr[right] === arr[right + 1]) {
          right--;
          continue;
        }
        const b = arr[left];
        const c = arr[right];
        const sum = a + b + c;
        if (sum > 0) {
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          res.push([a, b, c]);
          left++;
        }
      }
    }
    return res;
};

// 参考别人代码优化, 无需每次额外存值占用内存, 在和为0时排除值相同的情况
var threeSum = function(nums) {
  let arr = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    const a = arr[i];
    if (arr[i] > 0) { break };
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) left ++;
        while (left < right && arr[right] === arr[right - 1]) right --;
        left++;
        right--;
      }
    }
  }
  return res;
};

/* 
  优化前后仅内存占用有变化
          runtime   memory
  优化前    156ms    46.8MB
  优化后    156ms    46.7MB
*/

let nums = [-1, 0, 1, 2, -1, -4, 2];
const result = threeSum(nums);
console.log(result);
