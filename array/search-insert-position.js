/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    // Given a sorted array of distinct integers and a target value, return the index if the target is found.
    // If not found, return the index where i would be if it were inserted in order.

    // must be O(log n), so iterating over the entire array won't cut it

    let done = false, index = null, clonedNums = [...nums];
    while (!done) {
        // Is the value in the middle of nums a winner?
        index = Math.round((clonedNums.length - 1) / 2);
        let guessValue = clonedNums[index];
        if (guessValue === target) {
            done = true;

            // The outputed result is the index of the original nums array, not the index of clonedNums
            index = nums.indexOf(guessValue);
        } else {
            // Is there only one number left (that didn't match?)
            if (clonedNums.length === 1) {
                index = nums.indexOf(guessValue);
                index += (guessValue < target) ? 1 : -1;
                if (index < 0 ) {
                    index = 0;
                }
                done = true;
            }

            // The middle guess wasn't a winner
            if (guessValue < target) {
                // Ignore the values preceding the guess (because the list is sorted)
                clonedNums = clonedNums.splice(index);
            } else {
                // Ignore the values following the guess (because the list is sorted)
                // Copy values from zero to the value preceding index (but not index itself, since that is known to not match target)
                clonedNums = clonedNums.splice(0, index);
            }
        }
    }
    return index;
};

const nums = [1,3,5,6], target = 0;
const result = searchInsert(nums, target);
console.log('!');