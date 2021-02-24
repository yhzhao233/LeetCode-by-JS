/** 同1038
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
  第一版    116 ms(faster than 54.32%)    47.8MB(less than 36.92%)
*/
/* 思路：从右子树开始的中序遍历，因为BST中序是升序，所以从右子树开始就是降序，就可以获得大于节点值的值的累加值
*/
var convertBST = function(root) {
    let sum = 0;
    const postOrder = (root) => {
        if (root === null) return;
        postOrder(root.right);
        sum += root.val;
        root.val = sum;
        postOrder(root.left);
    };
    postOrder(root);
    return root;
};