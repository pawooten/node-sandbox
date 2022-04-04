/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    // Move all even integers at the beginning of the array followed by all the odd integers.
    let evenPointer = 0, oddPointer = 0;
    const length = nums.length;
    for (; evenPointer < length; evenPointer++) {
        if (nums[evenPointer] % 2) {
            // We have an odd number, Read ahead with the oddPointer until we find an odd to swap.
            while (nums[oddPointer] % 2 && oddPointer < length) { oddPointer++; }
            if (oddPointer === length || evenPointer > oddPointer) {
                return nums;
            }
            [ nums[evenPointer], nums[oddPointer]] = [nums[oddPointer], nums[evenPointer]];
        }
        oddPointer++;
    }
    return nums;
};
const nums = [0];
const result = sortArrayByParity(nums);
console.log('!');