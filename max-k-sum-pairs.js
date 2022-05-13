/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxOperations = function(nums, k) {
    let numMap = new Map();
    nums.forEach(num => {
        if (!numMap.has(num)) {
            numMap.set(num, 0);
        }
        numMap.set(num, numMap.get(num) + 1);
    });
    let pairCount = 0;
    [...numMap.keys()].forEach(key => {
        let complement = k - key;
        if (numMap.has(complement)) {
            pairCount += Math.min(numMap.get(key), numMap.get(complement));
        }
    });
    return Math.floor(pairCount / 2);
};
const nums = [3,1,3,4,3], k = 6;
const result = maxOperations(nums, k);
console.log('!');