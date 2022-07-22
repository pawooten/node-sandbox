/**
 * @param {number[]} nums
 * @return {number}
 */
 var wiggleMaxLength = function(nums) {
    // wiggle sequence - a sequence where the differences between successive numbers strictly alternate between positive and negative.
    // Return the length of the longest wiggle sequence within nums.

    // Iterate over nums, maintaining a reference for the longest wiggle sequence we've found thus far.
    let longestWiggleSequenceLength = 0, currentWiggleLength = 0;

    // Find the first wiggle sequence in the array, starting from the 0 index.
    const length = nums.length - 1; // 2nd to last because we are comparing nums[i] to nums[i+1]
    let index, foundFirstWiggle = false, wiggleDelta;
    for (index = 0; index < length && !foundFirstWiggle; index++) {
        wiggleDelta = nums[index + 1] - nums[index];
        foundFirstWiggle = wiggleDelta != 0;
    }
    if (foundFirstWiggle) {
        // We found a first wiggle, hopefully there are more
        currentWiggleLength = 2;
        for (; index < length; index++) {
            let newWiggleDelta = nums[index + 1] - nums[index];
            if ((newWiggleDelta < 0 && wiggleDelta < 0) || (newWiggleDelta > 0 && wiggleDelta > 0) || newWiggleDelta === 0) {
                // The new wiggle delta and the old wiggle delta aren't the same, or there is no delta between nums[i] and nums[i+1].
                longestWiggleSequenceLength = Math.max(longestWiggleSequenceLength, currentWiggleLength);
                currentWiggleLength = 1;
                wiggleDelta = newWiggleDelta;
            }
            currentWiggleLength++;
            wiggleDelta = newWiggleDelta;
        }
    } else {
        // We failed to find a wiggle at all, which suggests every value of nums is the same. A single item wiggle is therefore the longest wiggle in the array.
        return 1;
    }

    longestWiggleSequenceLength = Math.max(longestWiggleSequenceLength, currentWiggleLength);
    return longestWiggleSequenceLength;
};
const nums = [1,17,5,10,13,15,10,5,16,8];
const result = wiggleMaxLength(nums);
console.log('!');