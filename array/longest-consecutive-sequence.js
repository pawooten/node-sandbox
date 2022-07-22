/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    // Add all nums to a set to optimize determining the length of sequences later on.
    const numsSet = new Set(nums);
    
    let maxLength = 0;
    // Iterate over each integer within nums.
    for (const num of nums) {
        if (!numsSet.has(num - 1)) {
            // num is present within the nums array and also numsSet, but num - 1 is not present, indicating num is a candidate for the beginning of a consecutive sequence.
            let length = 1;
            while (numsSet.has(num + length)) {
                length += 1;
            }
            maxLength = Math.max(maxLength, length);
        }
    }
    
    return maxLength;
  };
const nums = [0,3,7,2,5,8,4,6,0,1];
const result = longestConsecutive(nums);
console.log('!');
