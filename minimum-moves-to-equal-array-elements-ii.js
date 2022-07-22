/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
    // Return the minimum number of moves to make all elements within the array equal.
    // In one move, you can increment, or decrement an element of the array by 1.

    // Determine the average value within the array, rounded to the nearest integer.
    // const sum = nums.reduce((previous, current) => previous + current, 0);
    // const average = Math.round(sum / nums.length);

    // Determine the median value in the array.
    const median = getMedian(nums);
    let moveCount = 0;
    // Iterate over each value in the array and determine how many moves are required to increment or decrement that value to reach the target.
    nums.forEach(num => {
        let delta = Math.abs(median - num);
        moveCount += delta;
    });
    return moveCount;
};

const getMedian = function(nums) {
    nums.sort((left, right) => left - right);

    const isEvenCount = nums.length % 2 === 0;
    let medianIndex = Math.floor(nums.length / 2);
    if (isEvenCount) {
        // Return the average of the two elements who would border the median, if the count was odd.
        return Math.round((nums[medianIndex - 1] + nums[medianIndex]) / 2);
    } else {
        return nums[medianIndex];
    }
}

const nums = [1,10,2,9];
const result = minMoves2(nums);
console.log('!');