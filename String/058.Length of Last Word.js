/**
 * @param {string} s
 * @return {number}
 */

 /* 
          runtime                       memory
  第一版    72 ms(faster than 91.19%)    38.3MB(less than 83.95%)
*/

 // 思路： 从右往左数，找到第一个非空格字符时开始计数
var lengthOfLastWord = function(s) {
    let str = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (!str && s[i] === ' ') continue;
        if (s[i] === ' ') break;
        str++;
    }
    return str;
};