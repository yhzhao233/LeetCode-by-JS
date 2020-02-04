//Given a binary tree, return the inorder traversal of its nodes' values.
//
// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [1,3,2]

//思路：用一个栈存节点，先不断向左找到最左节点，取值，再返回父节点查看是否有右节点，有则继续找左节点
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var inorderTraversal = function(root) {
    let result = [];
    if (root === null) {
        return result;
    }
    let stack = [];
    let cur = root;

    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        let node = stack.pop();
        result.push(node.val);
        cur = node.right;
    }

    return result;
};

//递归解法

var inorderTraversal = function(root) {
    let result = [];
    let fn = n => {
        if (n.left) {
            fn(n.left);
        }
        result.push(n.val);
        if (n.right) {
            fn(n.right);
        }
    };
    if (root) {
        fn(root);
    }
    return result;
};