/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const result = [];
    for (let index = 0; index < n; index++) {
        result.push(nums[index], nums[index + n]);
    }
    return result;
};

const nums = [2,5,1,3,4,7], n = 3;
const result = shuffle(nums, n);
console.log('!');