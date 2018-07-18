var addTwoNumbers = function(l1, l2) {
    let l1Temp = l1, l2Temp = l2;
    let sum = [];
    let temp = 0;
    while (l1Temp !== null || l2Temp !== null) {
        if (l1Temp !== null) {
            temp += l1Temp.val;
            l1Temp = l1Temp.next;
        }
        if (l2Temp !== null) {
            temp += l2Temp.val;
            l2Temp = l2Temp.next;
        }
        if (temp >= 10) {
            sum.push(temp - 10);
            temp = 1;
        } else {
            sum.push(temp);
            temp = 0;
        }
    }

    if (temp === 1) {
        sum.push(1);
    }
    return sum;


    //注释部分返回链表头
    // str1 = str1.reverse().join("");
    // str2 = str2.reverse().join("");
    // num1 = parseInt(str1, 10);
    // num2 = parseInt(str2, 10);
    // sum = num1 + num2;
    // sum = sum.toString().split("").reverse().map(Number);
    // return sum;
    // let sumLen = sum.length;
    // if (sumLen === 0) {
    //     return false;
    // }
    // let l3, temp;
    // l3 = new ListNode(sum[sumLen - 1]);
    // if (sumLen === 1) {
    //     l3.next = null;
    // } else {
    //     l3.next = new ListNode(sum[sumLen - 2]);
    //     for (let i = sumLen - 1; i >= 0; i--) {
    //         if (i > 0) {
    //             if (i === sumLen - 1) {
    //                 temp = l3.next;
    //             } else {
    //                 temp.next = new ListNode(sum[i - 1]);
    //                 temp = temp.next;
    //             }
    //
    //         } else if (i === 0) {
    //             temp.next = null;
    //         }
    //     }
    // }
    // return l3;
};