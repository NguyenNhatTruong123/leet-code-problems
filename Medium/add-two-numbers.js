/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var list = new ListNode();
    var memo = 0
    var cur = list
    while (l1 || l2) {
        var temp = 0;
        if (l1) temp += l1.val
        if (l2) temp += l2.val

        temp += memo
        if (temp >= 10) {
            temp -= 10;
            memo = 1;
        } else {
            memo = 0;
        }
        cur.next = new ListNode(temp);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        if (cur.next) cur = cur.next;
    }
    if (memo > 0) {
        cur.next = new ListNode(memo);
    }
    return list.next;
};