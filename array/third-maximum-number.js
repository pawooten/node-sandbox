/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    const maximum = Math.max(...nums); // First distinct maximum
    let remainingNums = nums.filter(num => num != maximum); // Remove all instances of maximum for remaining operations
    if (remainingNums.length === 0) {
        return maximum;
    }
    const secondMaximum = Math.max(...remainingNums);
    remainingNums = remainingNums.filter(num => num != secondMaximum);
    if (remainingNums.length === 0) {
        return maximum;
    }
    const thridMaximum = Math.max(...remainingNums);
    return thridMaximum;
};
const nums = [2,2,3,1];
const result = thirdMax(nums);
console.log('!');