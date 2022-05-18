/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    nums.sort((left, right) => left - right);
    let misses = [], current = 1;
    const length = nums.length;

    let index = 0;
    while (index < length) {
        let currentNum = nums[index];
        if (currentNum === current) {
            // We've found current!
            current++;
            index++;
            continue;
        }
        if (currentNum > current ) {
            // Current is missing, because we've sorted the list, and have encountered a value greater than current
            // while iterating through the sorted list.
            misses.push(current);

            // Increment current to search for the next number in the sequence during the next iteration of this loop
            current++;
        } else {
            index++;
        }
    }

    // How far away is current from length?
    while (current <= nums.length) {
        if (nums.indexOf(current) < 0) {
            misses.push(current);
        }
        current++;
    }
    return misses;
};
const nums = [1,1];
const result = findDisappearedNumbers(nums);
console.log('!');