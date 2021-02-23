/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 
  /* 
          runtime                       memory
  第一版    96 ms(faster than 87.83%)    41.9MB(less than 83.49%)
*/
/* 思路：前序中序构建二叉树，可根据前序拿到根节点，在中序找到位置，拿到左子树前中序，右子树前中序，继续递归
（通过索引计算避免浪费空间创建新数组）
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    const root = construct(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
    return root;
};

function construct(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd ) {
        return null;
    }
    const root = new TreeNode(preorder[preStart]);
    let rootIdx = inStart;
    for (let i = inStart; i <= inEnd; i++) {
        if (inorder[i] === root.val) {
            rootIdx = i
        }
    }
    root.left = construct(preorder, preStart + 1, preStart + rootIdx - inStart, inorder, inStart, rootIdx - 1);
    root.right = construct(preorder, preStart + rootIdx - inStart + 1, preEnd, inorder, rootIdx + 1, inEnd);
    return root;
}