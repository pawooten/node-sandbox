/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    // const result = [];
    // for (const num of nums) {
    //     result.push(nums[num]);
    // }
    // return result;

    return nums.map(num => nums[num]);
};

const nums = [0,2,1,5,3,4];
const result = buildArray(nums);
console.log('!');
