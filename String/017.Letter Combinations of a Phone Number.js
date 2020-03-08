/*
  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

  A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
  Input: "23"
  Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

 /**
 * @param {string} digits
 * @return {string[]}
 */

 /* 
          runtime   memory
  第一版    88 ms    33.6MB
  第二版    56 ms    33.6MB
  第三版    44 ms    33.8MB
*/

// 思路：递归，到达终点时保存字符串
// 第一版，运行时间过长
const mapping = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}
var letterCombinations = function(digits) {
    const len = digits.length;
    const arr = [];
    if (len === 0) {
      return []
    }
    recursive(0, digits, len, arr, '');
    return arr;
};

var recursive = function (index, digits, len, arr, str) {
  let cur = digits[index];
  let map = mapping[cur];
  while (!map && index < len) {
    index++;
    cur = digits[index]
    map = mapping[cur];
  }
  if (!map) return;
  if (index === len - 1) {
    for (let i = 0; i < map.length; i++) {
      arr.push(str + map[i]);
    }
    return;
  }
  for (let i = 0; i < map.length; i++) {
    recursive(index + 1, digits, len, arr, str + map[i]);
  }
  return;
}

// 第二版，第一版运行时间过长，猜测可能是递归过程中存了太多变量，优化了一下
var letterCombinations = function(digits) {
  const len = digits.length;
  const arr = [];
  if (len === 0) {
    return []
  }
  recursive(0, '');
  return arr;
  function recursive(index, str) {
    let map = mapping[digits[index]];
    while (!map && index < len) {
      index++;
      map = mapping[digits[index]];
    }
    if (!map) return;
    if (index === len - 1) {
      for (let i = 0; i < map.length; i++) {
        arr.push(str + map[i]);
      }
      return;
    }
    for (let i = 0; i < map.length; i++) {
      recursive(index + 1, str + map[i]);
    }
    return;
  }
};

//第三版 参考别人的解决方案，只维护一个数组(栈)，当达到最后的时候保存
var letterCombinations = function(digits) {
  const mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const len = digits.length;
  const arr = [];
  const cur = []
  if (len) {
    recursive(0);
  }
  return arr;
  function recursive(index) {
    if (index === len) {
      return arr.push(cur.join(''));
    }
    let str = mapping[digits[index]];
    for (let i = 0; i < str.length; i++) {
      cur.push(str[i]);
      recursive(index + 1);
      cur.pop();
    }
  }
};

const digits = '234234';
console.log(letterCombinations(digits));

