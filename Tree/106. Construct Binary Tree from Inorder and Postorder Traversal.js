/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

  
  /* 
          runtime                       memory
  第一版    96 ms(faster than 86.79%)    42.2MB(less than 76.01%)
*/
/* 思路：中序后序构建二叉树，可根据后序拿到根节点，在中序找到位置，拿到左子树中后序，右子树中后序，继续递归
（通过索引计算避免浪费空间创建新数组）
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) return null;
    const root = construct(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
    return root;
};

function construct(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (inStart > inEnd || postStart > postEnd ) {
        return null;
    }
    const root = new TreeNode(postorder[postEnd]);
    let rootIdx = inStart;
    for (let i = inStart; i <= inEnd; i++) {
        if (inorder[i] === root.val) {
            rootIdx = i
        }
    }
    root.left = construct(inorder, inStart, rootIdx - 1, postorder, postStart, postStart + rootIdx - inStart - 1);
    root.right = construct(inorder, rootIdx + 1, inEnd, postorder, postStart + rootIdx - inStart, postEnd - 1);
    return root;
}