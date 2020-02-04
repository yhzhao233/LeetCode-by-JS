//Reverse a linked list from position m to n. Do it in one-pass.
//Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

function ListNode(val) {
    this.val = val;
    this.next = null;
}


//思路：将 m -> n 的 node 从后向前移动
//以 1->2->3->4->5->NULL, m = 2, n = 4 为例
//状态变化： ① 1->4->2->3->5-NULL, ② 1->4->3->2->5->NULL (完成)
var reverseBetween = function(head, m, n) {
    if (head === null || !m || !n) {
        return [];
    }
    //newHead 方便从head处开始交换
    let newHead = new ListNode(0);
    //分别指向要插入位置的前一个节点和需要移动的节点的前一个节点
    let mCur, nCur;
    newHead.next = head;
    let tempNode = newHead;
    let len = 0;
    while (tempNode !== null) {
        len++;
        if (len === m) {
            mCur = tempNode;
        }
        tempNode = tempNode.next;
    }
    tempNode = null;
    if (!(m >= 1 && n >= m && len >= n)) {
        return false;
    }
    let t = n - m ;
    while (t !== 0) {
        nCur = mCur;
        for (let i = t; i > 0; i--) {
            nCur = nCur.next;
        }
        tempNode = nCur.next;
        nCur.next = tempNode.next;
        tempNode.next = mCur.next;
        mCur.next = tempNode;
        mCur = mCur.next;
        t--;
    }
    return newHead.next;
};

let pattern = /[a-d]+/;


function f(pattern, str) {
    for (let i = 0; i < str.length; i++) {
        if (!pattern.test(str[i])) {
            return false;
        }
    }
}