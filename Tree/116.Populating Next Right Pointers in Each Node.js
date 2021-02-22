/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 /* 
          runtime                       memory
  第一版    96 ms(faster than 89.14%)    45.4MB(less than 61.74%)
*/
/* 思路：递归把每个左子节点的 next 设为 右子节点，但存在相邻树之间的情况，所以需要同时获取两个节点，并将第一个节点的右子节点指向第二个节点的左子节点
*/
var connect = function(root) {
    if (root !== null) {
        connectTwoNode(root.left, root.right)
    }
    return root;
};

function connectTwoNode(node1, node2) {
    if (node1 === null || node2 === null) {
        return;
    }
    node1.next = node2;
    connectTwoNode(node1.left, node1.right);
    connectTwoNode(node2.left, node2.right);
    connectTwoNode(node1.right, node2.left);
}