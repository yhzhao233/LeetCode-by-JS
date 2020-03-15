// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

// 思路：四个相加其实就是一个加三个，三个相加是一个加两个，
 /* 
  第一版看起来更好理解一点
          runtime   memory
  第一版    92 ms    38.9MB (less than 9%)
  第二版    92 ms    36.7MB (less than 90%)
*/
var fourSum = function(nums, target) {
  const arr = nums.sort((a, b) => a - b);
  const len = arr.length;
  const resFour = [];
  for (let i = 0; i < len - 3; i++) {
    const resThree = threeSum(i + 1, target - arr[i]);
    if (resThree && resThree.length) {
      resThree.map(item => {
        resFour.push([arr[i], ...item]);
      });
    }
    while(arr[i] === arr[i + 1]) { i++ };
  }

  return resFour;

  function threeSum(begin, target) {
    const resThree = [];
    for(let i = begin; i < len - 2; i++) {
      const resTwo = twoSum(i + 1, target - arr[i]);
      if (resTwo && resTwo.length) {
        resTwo.map(item => {
          resThree.push([arr[i], ...item]);
        });
        
      }
      while(arr[i] === arr[i + 1]) { i++ };
    }
    return resThree;
  }

  function twoSum (begin, target) {
    const resTwo = [];
    let end = len - 1;
    while (begin < end) {
      const sum = nums[begin] + nums[end];
      if (sum === target) {
        resTwo.push([nums[begin], nums[end]]);
        begin++;
        end--;
        while(begin < end && nums[begin] === nums[begin - 1]) { begin++ };
        while(begin < end && nums[end] === nums[end + 1]) { end-- };
      } else if (sum > target) {
        end--;
      } else {
        begin++;
      }
    }
    return resTwo;
  };
};

var fourSum = function(nums, target) {
  const arr = nums.sort((a, b) => a - b);
  const len = arr.length;
  const resFour = [];
  for (let i = 0; i < len - 3; i++) {
    const target3 = target - arr[i]
    for (let j = i + 1; j < len - 2; j++) {
      const target2 = target3 - arr[j];
      let begin = j + 1;
      let end = len - 1;
      while (begin < end) {
        const sum = arr[begin] + arr[end];
        if (sum === target2) {
          resFour.push([arr[i], arr[j], arr[begin], arr[end]]);
          begin++;
          end--;
          while(begin < end && arr[begin] === arr[begin - 1]) { begin++ };
          while(begin < end && arr[end] === arr[end + 1]) { end-- };
        } else if (sum > target2) {
          end--;
        } else {
          begin++;
        }
      }
      while(arr[j] === arr[j + 1]) { j++ };
    }
    while(arr[i] === arr[i + 1]) { i++ };
  }
  return resFour;
};


// const nums = [-3,-2,-1,0,0,1,2,3];
// const nums = [-2, -1, 0, 0, 1, 2];
const nums = [-1,0,-5,-2,-2,-4,0,1,-2];
// const target = 0;
const target = -9;
console.log(fourSum(nums, target));
// fourSum(nums, target)