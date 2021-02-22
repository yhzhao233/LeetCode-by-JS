/**
 * @param {character[][]} board
 * @return {boolean}
 */


   /* 
          runtime                       memory
  第一版    104 ms(faster than 56.29%)    45.6MB(less than 10.63%)
*/

 // 思路：二分查找，mid向下取整数，如果匹配不到则 j 是最后一个小于等于 target 的位置，应放在 j + 1 处；

function checkLine (list) {
    const obj = {};
   for (let val of list) {
       if (val !== '.' && Number(val) >= 1 && Number(val) <= 9) {
           obj[val] = obj[val] ? obj[val] + 1 : 1
       }
   }
   return !Object.keys(obj).some(key => obj[key] > 1);    
}
var isValidSudoku = function(board) {
   const rows = board;
   const cols = [];
   const subs = [];
   for (let j = 0; j < 9; j++) {
       let tempCol = [];
       let tempSub = [];
       for (let i = 0; i < 9; i++) {
           tempCol.push(board[i][j])
           if(i % 3 === 0 && j % 3 === 0) {
               for (let k = 0; k < 3; k++) {
                   tempSub = tempSub.concat([board[i][j + k], board[i + 1][j + k], board[i + 2][j + k]]);
               }
               if (tempSub.length === 9) {
                   subs.push(tempSub);
                   tempSub = [];
               }
           }
       }
       cols.push(tempCol);
   }
   for (let line of [...rows, ...cols, ...subs]) {
       if (!checkLine(line)) return false;
   }
   return true
};

// 参考方法二：使用 Set