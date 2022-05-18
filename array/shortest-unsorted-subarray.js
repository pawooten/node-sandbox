/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    const length = nums.length;
    let sortedNums = [...nums].sort((left, right) => left - right);
    let leftIndex, leftFound = false;
    for (leftIndex = 0; !leftFound; leftIndex++) {
        if (nums[leftIndex] != sortedNums[leftIndex]) {
            leftIndex--;
            leftFound = true;
        }
        if (leftIndex === length - 1) {
            // We've compared sortedNums and nums element by element and each match, there is no unsorted subarray.
            return 0;
        }
    }
    // We must have found a leftIndex, otherwise we should have short circuited.
    let rightIndex, rightFound = false;
    for (rightIndex = length - 1; !rightFound; rightIndex--) {
        if (nums[rightIndex] != sortedNums[rightIndex]) {
            rightIndex++;
            rightFound = true;
        }
        if (rightIndex === 0) {
            // should be impossible, but just in case
            return 0;
        }
    }
    return rightIndex - leftIndex + 1;
};
const nums =  [2,6,4,8,10,9,15];
const result = findUnsortedSubarray(nums);
console.log('!');