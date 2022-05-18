/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var find132pattern = function(nums) {
    // a 132 pattern is a subsequence of three integers, nums[i], nums[j] and nums[k] such that i<j<k and nums[i] < nums[k] < nums[j]
    // Return true if there is a 132 pattern in nums, otherwise return false.

    // We don't want to consider the last or second-to-last numbers in the array as possible i's, because that leaves no room for j and k.    
    const length = nums.length - 2;
    let recordKeeper = { found: false };
    for (let i = 0; i < length; i++) {
        if (recordKeeper.found) {
            return true;
        }
        findJ(nums, i, recordKeeper);
    }
    return recordKeeper.found;
};
const is132pattern = function(nums, i, j, k) {
    let numsK = nums[k];
    return i < j && j < k && nums[i] < numsK && numsK < nums[j];
}
const findJ = function(nums, i, recordKeeper) {
    // Leave at least one index for k
    const length = nums.length - 1;
    for (let j = i + 1; j < length && !recordKeeper.found; j++) {
        findK(nums, i, j, recordKeeper);
    }
}
const findK = function(nums, i, j, recordKeeper) {
    const length = nums.length;
    for (let k = j + 1; k < length && !recordKeeper.found; k++) {
        recordKeeper.found = recordKeeper.found || is132pattern(nums, i,j,k);
    }
}
const nums =  [3,1,4,2];
const result = find132pattern(nums);
console.log('!');
