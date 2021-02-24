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
 * @return {TreeNode[]}
 */

  /* 
          runtime                       memory
  第一版    120 ms(faster than 85.53%)    20.18MB(less than 53.15%)
*/
/* 思路：前序遍历，遍历完每一颗子树时记录前序遍历的顺序，当有一条相同记录时则为重复子树，记录根节点
注意：val可能重复，记顺序时用特殊符号隔开，null也需要记录
    特殊case [2,1,11,11,null,1]， [0,0,0,0,null,null,0,null,null,null,0]
*/
var findDuplicateSubtrees = function(root) {
    const record = {};
    const list = [];
    const preBuild = (root) => {
     if (root === null) return '/';
        let str = String(root.val) + '-';
        str += preBuild(root.left) + '-';
        str += preBuild(root.right);
        if (!record[str]) {
            record[str] = 1;
        } else if (record[str] === 1) {
            list.push(root);
            record[str]++;
        }
        return str;
    }
    preBuild(root);
    return list;
};