//Given a linked list, remove the n-th node from the end of list and return its head.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeNthFromEnd = function(head, n) {
    let len = 0;
    let N1 = head;
    let arr = [];
    while (N1 !== null) {
        len++;
        N1 = N1.next;
    }
    if (n <= 0 || n > len) {
        return false;
    }
    let nLen = len - n;
    if (nLen === 0) {
        N1 = head.next;
        if (N1 === null) {
            return arr;
        }
        while (N1 !== null) {
            arr.push(N1.val);
            N1 = N1.next;
        }
        return arr;
    }

    N1 = head;
    while (nLen) {
        if (nLen === 1) {
            N1.next = N1.next.next;
            console.log(N1.val);
            break;
        }
        N1 = N1.next;
        nLen--;
    }

    N1 = head;
    while (N1 !== null) {
        arr.push(N1.val);
        N1 = N1.next;
    }
    return arr;
};