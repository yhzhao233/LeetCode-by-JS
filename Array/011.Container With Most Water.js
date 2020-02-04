/**
 * @param {number[]} height
 * @return {number}
 */
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
// Note: You may not slant the container and n is at least 2.

// 解法一：计算所有面积
var maxArea = function(height) {
    let max = 1;
    let len = height.length;
    for (let i = 0; i < len; i++) {
      const left = height[i];
      for (let j = i + 1; j <= len; j++) {
        const right = height[j];
        const area = Math.min(left, right) * (j - i);
        if (area > max) {
          max = area
        }
      }
    }
    return max;
};

// 解法二：左右指针向中逼近，宽度一定时，面积受限于较短的高度
var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left !== right) {
    if (left === right) break;
    let length = right - left;
    let leftHeight = height[left];
    let rightHeight = height[right];
    let minHeight = 0;
    if (leftHeight > rightHeight) {
      minHeight = rightHeight;
      right--;
    } else {
      minHeight = leftHeight;
      left++;
    }
    let area = length * minHeight;
    if (area > max) max = area;
  }
  return max;
};

// let arr = [0,5];
// let arr = [1,1];
let arr = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(arr));
