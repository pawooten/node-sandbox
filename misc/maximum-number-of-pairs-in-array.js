/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var numberOfPairs = function(nums) {
    // Sort nums so that equal values are adjacent.
    nums.sort((left, right) => left - right);
    let firstIndex = 0, lastIndex, currentValue, count, pairCount = 0, leftoverCount = 0;
    const length = nums.length;
    while (firstIndex < length) {
        currentValue = nums[firstIndex];
        // Hopefully the next value to current is equal to current. If not, that means we have a singleton and cannot form any matches from it.
        lastIndex = firstIndex + 1;
        // Increment lastIndex until we find a value that doesn't match the currentValue or we reach the end of the list. 
        while (currentValue === nums[lastIndex] && lastIndex < length) {
            lastIndex++;
        }
        // Backup, to point to the last index of currentValue (rather than the first index of the next value) or, the last index in the list.
        lastIndex--;
        count = lastIndex - firstIndex + 1;
        pairCount += Math.floor(count / 2);
        leftoverCount += count % 2;

        // Advance the firstIndex cursor to the next span of values.
        firstIndex = lastIndex + 1;
    }

    return [pairCount, leftoverCount];
};

const nums = [0];
const result = numberOfPairs(nums);
console.log('!');