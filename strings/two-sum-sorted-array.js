/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    // Numbers is sorted in increasing order. Find two numbers such that they add up to target,
    // Return the indices of the two numbers incremented by one as an integer array.

    // numbers may contain negative values.

    const length = numbers.length;
    for (let index = 0; index < length; index++) {
        for (let subIndex = index + 1; subIndex < length; subIndex++) {
            if (numbers[index] + numbers[subIndex] === target) {
                return [ index + 1, subIndex + 1];
            }
        }
    }
};
const numbers = [-1,0], target = -1;
const result = twoSum(numbers, target);
console.log('!');