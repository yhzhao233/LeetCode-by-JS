//Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
//Given the sorted linked list: [-10,-3,0,5,9],
//
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//
//       0
//      / \
//    -3   9
//    /   /
//  -10  5

function ListNode(val) {
 this.val = val;
 this.next = null;
}

function TreeNode(val) {
 this.val = val;
 this.left = this.right = null;
}

//思路：数组有序，则数组中间值即为根节点，递归数组

var sortedListToBST = function(head) {
    if (head === null) {
        return [];
    } 
    let nums = [];
    let len = 0;
    while (head !== null) {
        nums.push(head.val);
        len++;
        head = head.next;
    }
    
    function BSTRec(nums, start, end) {
        if (start > end) {
            return null;
        }
        let mid = Math.floor((start + end) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = BSTRec(nums, start, mid - 1);
        root.right = BSTRec(nums, mid + 1, end);
        return root;
    }

    return BSTRec(nums, 0, len - 1);
    
};