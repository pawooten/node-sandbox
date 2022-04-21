/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const length = nums.length;
    let map = new Map();
    for (let index = 0; index < length; index++) {
        let currentNum = nums[index];
        if (map.has(currentNum)) {
            return true;
        }
        map.set(currentNum, true);
    }
    return false;
};
const nums = [1,2,3,4];
const result = containsDuplicate(nums);
console.log('!');