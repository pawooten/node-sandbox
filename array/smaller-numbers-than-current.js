/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const result = [], length = nums.length;
    let count, value;
    for (let index = 0; index < length; index++) {
        value = nums[index];
        count = nums.slice(0, index + 1).filter(v => v < value).reduce((prev, curr) => prev + curr, 0);
        result.push(count);
    }

    return result;
};

const nums = [8,1,2,2,3];
const result = smallerNumbersThanCurrent(nums);
console.log('!');