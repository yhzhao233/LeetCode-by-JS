//Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.


function ListNode(val) {
    this.val = val;
    this.next = null;
}

//尝试直接操纵链表时处理不当没有成功，换用另一种思路，但是花费了额外的空间
var deleteDuplicates = function(head) {
    if (head === null) {
        return [];
    }
    let newHead = new ListNode(0);
    let headCopy = head;
    let h = {};

    while (head !== null) {
        if (!h[head.val]) {
            h[head.val] = 1;
        } else {
            h[head.val]++;
        }
        head = head.next;
    }

    head = headCopy;
    headCopy = newHead;
    while (head !== null) {
        if (h[head.val] === 1) {
            headCopy.next = new ListNode(head.val);
            headCopy = headCopy.next;
            head = head.next;
        } else {
            head = head.next;
        }
    }
    return newHead.next;
};


//示例更优解
// var deleteDuplicates = function(head) {
//     if (head === null) {
//         return false;
//     }
//     let current = head;
//     let newHead = null;
//     let tempVal;
//     let temp;
//     while (current) {
//         if (tempVal !== current.val) {
//             if (current.next.val !== current.val || !current.next) {
//                 if (temp) {
//                     temp.next = current;
//                 }
//                 temp = current;
//                 newHead = newHead || temp;
//             } else {
//                 if (temp) {
//                     temp.next = null;
//                 }
//             }
//         }
//         tempVal = current.val;
//         current = current.next;
//     }
//     return newHead;
// };