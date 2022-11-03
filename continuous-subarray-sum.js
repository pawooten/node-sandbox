/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var checkSubarraySum = function(nums, k) {
  
};

const isSubarraySum = function(nums, k, count) {
    let currentSum, index, multipler;
    const length = nums.length - (count - 1);
    for (index = 0; index < length; index++) {
        currentSum = nums.slice(index, count);
        // Iterate until we overshoot the currentSum.
        for (multipler = 1; k * multipler <= currentSum; multipler++) {}
        if (k * (multipler - 1) === currentSum) {
            return true;
        }
    }
    return false;
};

const nums = [23,2,6,4,7], k = 6;
const result = checkSubarraySum(nums, k);
console.log('!');