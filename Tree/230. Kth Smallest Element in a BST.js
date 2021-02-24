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
 * @param {number} k
 * @return {number}
 */

 
  /* 
          runtime                       memory
  第一版    92 ms(faster than 76.69%)    44.6MB(less than 47.83%)
*/
/* 思路：BST中序遍历是升序，所以在中序遍历到第 k 个数时即可返回结果
*/
var kthSmallest = function(root, k) {
    let remain = k;
    const inOrder = (root) => {
        if (root === null) return;
        const left = inOrder(root.left);
        if (--remain === 0) {
            return root.val;
        }
        const right = inOrder(root.right);
        return typeof left === 'number' ? left : right;
    };
    return inOrder(root);
};