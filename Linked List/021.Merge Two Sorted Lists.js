//Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
//递归的更优解
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// var mergeTwoLists = function(l1, l2) {
//     let l1Temp = l1, l2Temp = l2;
//     let head;
//     let arr = [];
//     if (l1Temp === null && l2Temp === null) {
//         return arr;
//     } else if (l1Temp === null && l2Temp !== null) {
//         while (l2Temp !== null) {
//             arr.push(l2Temp.val);
//             l2Temp = l2Temp.next;
//         }
//         return arr;
//     } else if (l1Temp !== null && l2Temp === null) {
//         while (l1Temp !== null) {
//             arr.push(l1Temp.val);
//             l1Temp = l1Temp.next;
//         }
//         return arr;
//     } else {
//         head = l1Temp.val >= l2Temp.val ? l2Temp.val : l1Temp.val;
//         while (l1Temp !== null || l2Temp !== null) {
//             if (l1Temp === null && l2Temp !== null) {
//                 while (l2Temp !== null) {
//                     arr.push(l2Temp.val);
//                     l2Temp = l2Temp.next;
//                 }
//             } else if (l1Temp !== null && l2Temp === null) {
//                 while (l1Temp !== null) {
//                     arr.push(l1Temp.val);
//                     l1Temp = l1Temp.next;
//                 }
//             } else {
//                 if (l1Temp.val >= l2Temp.val) {
//                     arr.push(l2Temp.val);
//                     head.next = l2Temp;
//                     l2Temp = l2Temp.next;
//                 } else {
//                     arr.push(l1Temp.val);
//                     head.next = l1Temp;
//                     l1Temp = l1Temp.next;
//                 }
//             }
//         }
//         return arr;
//     }
// };