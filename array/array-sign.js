/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    // If any of the values in the array produce zero, the entire result is zero, since any number * 0 = 0.
    // Iterate over the numbers in the array, counting the values which produce a negative, since those change the sign
    // of the result.
    let negativeCount = 0;
    for (const num of nums) {
        if (num === 0) {
            return 0;
        }
        if (num < 0) {
            negativeCount++;
        }
    }
    if (negativeCount % 2 === 1) {
        return -1;
    }
    return 1;
};

const nums = [-1,1,0,1,-1];
const result = arraySign(nums);
console.log('!');