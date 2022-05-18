/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    // Given an integer array nums and an integer k, return the k most frequent elements (in any order)

    // Determine the unique numbers contained within the array
    let numMap = new Map();
    nums.forEach(num => {
        if (!numMap.has(num)) {
            numMap.set(num, 0);
        }
        let count = numMap.get(num) + 1;
        numMap.set(num, count);
    });

    let sortedKeys = [...numMap.keys()].sort((left, right) => numMap.get(left) - numMap.get(right));
    let results = [];
    while (k > 0) {
        results.push(sortedKeys.pop());
        k--;
    }
    return results;
};
const nums = [1], k=1;
const result = topKFrequent(nums, k);
console.log('!');