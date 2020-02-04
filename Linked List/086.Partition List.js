//Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
//
// You should preserve the original relative order of the nodes in each of the two partitions.

function ListNode(val) {
    this.val = val;
    this.next = null;
}
//思路：当 head === null 或 head.next === null 时直接 return head;
//cur记录当前位置，pre记录前一个位置，将输入的链表接在一个新节点后面方便使用 pre ,用 head 记录新链表头
//k 使找 val > x 的节点的过程只进行一次,找到第一个 val > x 的节点
//first 是 val > x 的节点的前一个节点
//temp 用于修改链表
var partition = function (head, x) {
    if (!head || !head.next) return head;
    let cur = head;
    let pre = new ListNode(0);
    pre.next = head;
    head = pre;
    let k = 1;
    let first;
    let temp;
    while (cur) {

        if (first) {
            //移动链表中 val < x 的节点
            while (cur && cur.val < x) {
                pre.next = cur.next;
                temp = first.next;
                first.next = cur;
                cur.next = temp;
                cur = pre.next;
                first = first.next;
            }
        }

        if (!cur) break;

        if (cur.val >= x && k > 0) {
            first =  pre;
            k--;
        }

        pre = pre.next;
        cur = cur.next;
    }
    return head.next;
};