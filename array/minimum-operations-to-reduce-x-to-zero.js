/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
 var minOperations = function(nums, x) {
    // In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value 
    // from x (which modifies the array for future oeprations)    

    // Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

    const recordKeeper = { minimumOperations: null };
    reduceX([...nums], x, 0, recordKeeper);
    return recordKeeper.minimumOperations === null ? -1 : recordKeeper.minimumOperations;
};

const reduceX = function(nums, x, operationCount, recordKeeper) {
    if (x < 0) {
        // We've overshot the target, and since nums must contain non-negative integers, this path cannot reach the target and must be abandoned.
        return;
    }
    if (x === 0) {
        // We've reached the target! Did we get here in fewer operations than the current best record (if any)?
        if (!recordKeeper.minimumOperations) {
            recordKeeper.minimumOperations = operationCount;
        } else {
            recordKeeper.minimumOperations = Math.min(recordKeeper.minimumOperations, operationCount);
        }
        return;
    }
    if (nums.length === 0) {
        // We've exhausted all numbers within nums, no more paths to explore.
        return;
    }

    // We haven't reached the target yet. How many numbers remain to process?
    if (nums.length === 1) {
        // There's only one number left in the array, which means there is only a single operation remaining to explore because the firstValue and the lastValue
        // are the same.
        reduceX([], x - nums[0], operationCount + 1, recordKeeper);
    } else {
        // We have at least two numbers remaining in the array, so both a first and last value exist. Extract the first and last values from the array.
        let firstValue = nums.shift();
        let lastValue = nums.pop();

        // Explore the operation path which results in removing the first value from the array and subtracting from the current value of x.
        reduceX([...nums, lastValue], x - firstValue, operationCount + 1, recordKeeper);

        // Explore the operation path which results in removing the last value from the array and subtracting from the current value of x.
        reduceX([firstValue, ...nums], x - lastValue, operationCount + 1, recordKeeper);
    }
}

const nums = [8828,9581,49,9818,9974,9869,9991,10000,10000,10000,9999,9993,9904,8819,1231,6309], x = 134365;
const result = minOperations(nums, x);
console.log('!');