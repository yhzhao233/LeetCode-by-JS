//Given a linked list, swap every two adjacent nodes and return its head.
//Given 1->2->3->4, you should return the list as 2->1->4->3.
//Your algorithm should use only constant extra space.
// You may not modify the values in the list's nodes, only nodes itself may be changed.

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var Head = new ListNode(1);
Head.next = new ListNode(2);
Head.next.next = new ListNode(3);

var swapPairs = function(head) {

    //当输入链表为 null 或仅有一个节点时直接返回
    if (head === null || head.next === null) {
        return head;
    }
    //将链表由奇数位值和偶数位值分为两个链表
    let odd_head = new ListNode(0), odd_temp = new ListNode(0);
    let even_head = new ListNode(0), even_temp = new ListNode(0);
    odd_head.next = odd_temp;
    even_head.next = even_temp;
    let k = 0;
    while (head !== null) {
        k++;
        if (k % 2 === 1) {
            odd_temp.next = head;
            odd_temp = odd_temp.next;
        } else if (k % 2 === 0) {
            even_temp.next = head;
            even_temp = even_temp.next;
        }
        head = head.next;
    }
    if (k % 2 === 0) {
        odd_temp.next = null;
    } else if (k % 2 === 1) {
        even_temp.next = null;
    }
    odd_head = odd_head.next.next;
    even_head = even_head.next.next;
    odd_temp = null;
    even_temp = null;

    //将两个链表合并为一个两两逆序的目标链表
    let newHead = new ListNode(0);
    let newHead_temp = new ListNode(0);
    newHead.next = newHead_temp;
    let t = 0;
    while (odd_head !== null || even_head !== null) {
        if (odd_head === null) {
            newHead_temp.next = even_head;
            break;
        } else if (even_head === null) {
            newHead_temp.next = odd_head;
            break;
        } else {
            t++;
            if (t % 2 === 1) {
                newHead_temp.next = even_head;
                newHead_temp = newHead_temp.next;
                even_head = even_head.next;

            } else if (t % 2 === 0) {
                newHead_temp.next = odd_head;
                newHead_temp = newHead_temp.next;
                odd_head = odd_head.next;
            }
        }
    }
    newHead = newHead.next.next;
    newHead_temp = null;
    return newHead;
};