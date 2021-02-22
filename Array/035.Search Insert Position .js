// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

  /* 
          runtime                       memory
  第一版    60 ms(faster than 100.00%)    38.6MB(less than 57.80%)
*/

 // 思路：二分查找，mid向下取整数，如果匹配不到则 j 是最后一个小于等于 target 的位置，应放在 j + 1 处；
var searchInsert = function(nums, target) {
    let i = 0, j = nums.length - 1;
    if (nums[i] >= target) return 0;
    if (nums[j] < target) return j + 1;
    while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) {
            i = mid + 1;
        } else {
            j = mid - 1
        }
    }
    return j+1;
};