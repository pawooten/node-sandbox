/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    // non-empty array of integers, every element appears twice except for one. Find the one singleton.
    // linear runtime.

    let map = new Map();
    nums.forEach(num => {
        map.has(num) ? map.delete(num) : map.set(num, true);
    });
    // entries() returns an iterator of [key, value]
    return map.entries().next().value[0];
};
const nums = [1];
const result = singleNumber(nums);
console.log('!');