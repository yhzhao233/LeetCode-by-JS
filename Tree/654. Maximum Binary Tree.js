/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

  /* 
          runtime                       memory
  第一版    112 ms(faster than 89.19%)    45.4MB(less than 53.15%)
*/
/* 思路：构建最大二叉树，遍历找到最大值，设为根节点，然后递归左右子数组进行同样的操作
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var constructMaximumBinaryTree = function(nums) {
   if (!nums.length) return null;
   let max = 0;
   let maxIndex = 0;
   nums.forEach((num, index) => {
       if (num > max) {
           max = num;
           maxIndex = index;
       }
   });
   const root = new TreeNode(nums[maxIndex]);
   root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
   root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, nums.length));
   return root;
};

//改进：需要控制索引