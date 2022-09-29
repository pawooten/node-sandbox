/**
 * @param {number[]} nums
 * @return {number}
 */
 var findClosestNumber = function(nums) {
    let closest = nums[0];
    const length = nums.length;
    for (let index = 0; index < length; index++) {
        let current = nums[index];
        if (AisCloser(current, closest)) {
            closest = current;
        }
    }
    return closest;
};

const AisCloser = (a, b) => {
    let aOffset = Math.abs(0 - a), bOffset = Math.abs(0 - b);
    if (aOffset < bOffset) {
        return true;
    }
    if (aOffset === bOffset && a > b) {
        return true;
    }
    return false;
}

const nums = [-4,-2,1,4,8];
const result = findClosestNumber(nums);
console.log('!');