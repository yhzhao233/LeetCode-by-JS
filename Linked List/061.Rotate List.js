/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

   /* 
          runtime                       memory
  第一版    92 ms(faster than 68.54%)    40.2MB(less than 88.70%)
*/

 // 思路： 先计算总数，算出需要翻转的节点的个数，一个一个添加到表头
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    let cur = head;
    let pre = null;
    let length = 0;
    while (cur) {
        cur = cur.next;
        length ++;
    }
    
    cur = head;
    k = k % length;
    while (cur && k > 0) {
        if (cur.next) {
            prev = cur;
            cur = cur.next;
            continue;
        }
        
        cur.next = head;
        head = cur;
        prev.next = null;
        k--;
    }
    return head;
};