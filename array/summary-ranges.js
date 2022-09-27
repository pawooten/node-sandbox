/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    // Return the smallest sorted list of ranges that cover all numbers in the array exactly.
    const ranges = [], length = nums.length;

    let index = 0, subIndex, nextNumForRange, rangeStart;
    while (index < length) {
        rangeStart = nums[index];
        nextNumForRange = rangeStart + 1;
        subIndex = index + 1;
        while (subIndex < length && nums.indexOf(nextNumForRange) > 0) {
            subIndex++;
            nextNumForRange++;
        }
        ranges.push([rangeStart, nums[subIndex - 1]]);
        index = subIndex;
    }

    // massage
    return ranges.map(([start, end]) => (start === end) ? `${start}` : `${start}->${end}`);
};
const nums = [0,2,3,4,6,8,9];
const result = summaryRanges(nums);
console.log('!');