/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
/* 
          runtime                       memory
  第一版    96 ms(faster than 40.93%)    40.8MB(less than 76.17%)
*/

// 思路：先把新的项插入按顺序排的位置，然后按照056的解法：先排序，然后比较范围，可合并的合并，不可合并的直接 push

var insert = function(intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];
    let begin = -1;
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[0] < intervals[i][0]) {
            begin = i;
            break;
        }
    }
    if (begin === -1) {
        intervals.push(newInterval);
    } else {
        intervals.splice(begin, 0, newInterval);
    }
    return merge(intervals);
};

var merge = function(intervals) {
    const arr = intervals.sort((a, b) => a[0] - b[0]);
    const result = [arr[0]];
    if (arr.length === 1) return result;
    for (let i = 1; i < arr.length; i++) {
        const lastIdx = result.length - 1
        if (result[lastIdx][1] < arr[i][0]) {
            result.push(arr[i]);
        } else {
            result[lastIdx] = [Math.min(result[lastIdx][0], arr[i][0]), Math.max(result[lastIdx][1], arr[i][1])];
        }
    }
    return result;
};