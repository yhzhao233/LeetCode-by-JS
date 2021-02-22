/**
 * @param {number[]} nums
 * @return {number}
 */


/* 
          runtime                       memory
  第一版    80 ms(faster than 88.37%)    39MB(less than 83.50%)
*/

// 思路： 比较 当前值 和 当前值+之前字串的和，若当前值较大则从当前值计算新字串，同步更新最大和
var maxSubArray = function(nums) {
    let max = nums[0];
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
        temp = Math.max(temp + nums[i], nums[i]);
        max = Math.max(temp, max);
    }
    return max;
};