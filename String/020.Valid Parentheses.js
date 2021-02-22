/**
 * @param {string} s
 * @return {boolean}
 */

 /* 
          runtime                       memory
  第一版    80 ms(faster than 66.05%)    38.7MB(less than 72.90%)
*/

//思路：开括号入栈，闭括号匹配上则出栈
var isValid = function(s) {
    const remain = [];
    let i = 0;
    while (i < s.length) {
        const item = s[i++];
        if (item === '(' || item === '[' || item === '{') {
            remain.push(item);
        } else if (item === ')' && remain.pop() !== '(') {
            return false;
        } else if (item === ']' && remain.pop() !== '[') {
            return false;
        } else if (item === '}' && remain.pop() !== '{') {
            return false;
        }
    }
    return !remain.length;
};