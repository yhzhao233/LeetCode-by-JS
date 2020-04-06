/* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */

 /* 
          runtime                       memory
  第一版    60 ms(faster than 45.11%)    35.2MB(less than 53.85%)
  第二版    60 ms(faster than 45.11%)    34.9MB(less than 84.62% )
*/
// 思路: 两个参数记录左右括号剩余数量，都为0则记录字符串
var generateParenthesis = function (n) {
  const leftNum = n;
  const rightNum = n;
  const temp = [];
  const result = [];
  function getStr(leftNum, rightNum) {
    if (leftNum === 0 && rightNum === 0) {
      result.push(temp.join(''));
      return;
    } else if (leftNum === 0) { //左侧为0只放右括号
      temp.push(')');
      getStr(leftNum, rightNum - 1);
      temp.pop();
    } else if (leftNum === n) { //左侧为n只放左括号
      temp.push('(');
      getStr(leftNum - 1, rightNum);
    } else if (leftNum !== n && leftNum === rightNum) {  // 左侧等于右侧只放左括号
      temp.push('(');
      getStr(leftNum - 1, rightNum);
      temp.pop();
    } else if (leftNum < rightNum) { // 左侧小于右侧，左右各放一次
      temp.push('(');
      getStr(leftNum - 1, rightNum);
      temp.pop();
      temp.push(')');
      getStr(leftNum, rightNum - 1);
      temp.pop();
    }
  }
  getStr(leftNum, rightNum);
  return result;
};

// 其实不用区分, 直接递归，传递剩余的左右括号数，并在左括号大于右括号时直接返回
var generateParenthesis = function (n) {
  const temp = [];
  const result = [];
  function getStr(leftNum, rightNum) {
    if (leftNum === 0 && rightNum === 0) {
      result.push(temp.join(''));
      return;
    } else if (leftNum > rightNum) {
      return
    }
    if (leftNum > 0) {
      temp.push('(');
      getStr(leftNum - 1, rightNum);
      temp.pop();
    }
    if (rightNum > 0) {
      temp.push(')');
      getStr(leftNum, rightNum - 1);
      temp.pop();
    }
  }
  getStr(n, n);
  return result;
};

console.log(generateParenthesis(10));
