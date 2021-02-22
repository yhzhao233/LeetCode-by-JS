/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/* 
          runtime                       memory
  第一版    124 ms(faster than 84.66%)    50.5MB(less than 32.92%)
*/

 // 思路 将数据中每个字符串排序，在 map 表中作为 key，保存对应的字符串数组
var groupAnagrams = function(strs) {
    const map = {};
    strs.forEach(str => {
        const mapKey = str.split('').sort().join('');
        if (!map[mapKey]) {
            map[mapKey] = [];
        }
        map[mapKey].push(str);
    })
    return Object.keys(map).reduce((acc, key) => {
        acc.push(map[key]);
        return acc;
    }, []);
};