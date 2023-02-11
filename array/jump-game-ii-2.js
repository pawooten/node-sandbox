/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // It's too slow to naively recurse through all options. Instead, let's build an array. The value of each populated element of the array is the fewest number
    // of jumps to reach the element of the same index in nums.
    const minimumJumps = new Array(nums.length), targetIndex = nums.length - 1;
    let index = 0, jump, currentCount;
    minimumJumps[index] = 0; // We start at the first element.
    while (index !== targetIndex) {
        currentCount = minimumJumps[index];
        jump = nums[index];
        while (jump > 0) {
            minimumJumps[index + jump] = currentCount + 1;
            jump--;
        }
        
    }
    

    return minimumJumps[targetIndex]; // The fewest jumps to reach the last element is the solution of the exercise.
}

const nums = [2,3,1,1,4];
const result = jump(nums);
console.log('!');