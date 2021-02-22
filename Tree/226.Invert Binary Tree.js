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
 * @return {TreeNode}
 */
 /* 
          runtime                       memory
  第一版    72 ms(faster than 93.89%)    39MB(less than 40.8%)
*/
/* 思路：递归，交换节点的左右子树
*/
var invertTree = function(root) {
    if (root === null) return null;
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left);
    invertTree(root.right);
    return root;
};