/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findPairs = function(nums, k) {
    // return the number of unique k-diff pairs in the array. a k-diff pair is an integer pair where i and j are indices of the array,
    // and the absolute value of nums[i] - nums[j] == k
    let pairs = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let kDiff = Math.abs(nums[i] - nums[j]);
            let iValue = nums[i];
            if (kDiff == k) {
                let jValue = nums[j];
                let pairKey = Math.min(iValue, jValue);
                let pairValue = pairKey === iValue ? jValue : iValue;
                let pairList = pairs[pairKey] || [];
                if (!pairList.includes(pairValue)) {
                    pairList.push(pairValue);
                    pairs[pairKey] = pairList;
                }
            }
        }
    }
    let uniquePairCount = Object.entries(pairs).map((keyValue) => keyValue[1].length).reduce((previous, current) => previous + current);
    return uniquePairCount;
};
const nums = [3,1,4,1,5], k = 2;
const result = findPairs(nums, k);
console.log('!');