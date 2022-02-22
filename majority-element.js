/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    // return the majority element, the element that appears more than n /2 times. Assume a majority element always exists.
    let elementCounts = new Map();
    const majorityThreshold = Math.ceil(nums.length / 2);
    for (let index = 0; index < nums.length; index++) {
        let count = 0, value = nums[index];
        if (elementCounts.has(value)) {
            count = elementCounts.get(value);
        }
        count++;
        if (count === majorityThreshold) {
            return value;
        }
        elementCounts.set(value, count);
    }    
};
const nums = [2,2,1,1,1,2,2];
const result = majorityElement(nums);
console.log('!');