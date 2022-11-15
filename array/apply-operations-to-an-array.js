/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var applyOperations = function(nums) {
    const length = nums.length - 1;
    let current;
    for (let index = 0; index < length; index++) {
        current = nums[index];
        if (current === nums[index + 1]) {
            nums[index] = current * 2;
            nums[index + 1] = 0;
        }
    }

    let zeroCounter = 0;
    const result = [];
    for (const num of nums) {
        if (num === 0) {
            zeroCounter++;
        } else {
            result.push(num);
        }
    }
    while (zeroCounter > 0) {
        result.push(0);
        zeroCounter--;
    }
    return result;
};

const nums = [1,2,2,1,1,0];
const result = applyOperations(nums);
console.log('!');