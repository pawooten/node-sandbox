/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
     const length = nums.length;
    let maxStreak = 0, currentStreak = 0;
    for (let index = 0; index < length; index++) {
        if (nums[index] === 1) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    }
    return maxStreak;
};
const nums = [1,1,0,1,1,1];
const result = findMaxConsecutiveOnes(nums);
console.log('!');