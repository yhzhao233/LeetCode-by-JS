/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

 /* 
          runtime                       memory
  第一版    96 ms(faster than 55.3%)    40.6MB(less than 81.46%)
*/
/* 思路：整个过程拆解成四步，递归，后序遍历
    1. 左子树拉平
    2，右子树拉平
    3. 将左子树挂在右子树的位置
    4. 将原右子树挂在末端
*/
var flatten = function(root) {
    if (root === null) {
        return;
    }
    flatten(root.left);
    flatten(root.right);
    
    let { left, right } = root;
    
    root.left = null;
    root.right = left;
    
    let last = root;
    while(last.right !== null) {
        last = last.right;
    }
    last.right = right;
};