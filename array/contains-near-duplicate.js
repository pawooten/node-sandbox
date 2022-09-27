/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    // Build a map where keys are unique values within nums, and the values are an array of indices where that value occurs.
    const numMap = new Map(), length = nums.length;
    for (let index = 0; index < length; index++) {
        let num = nums[index];
        if (!numMap.has(num)) {
            // This is the first instance of this num we've encountered. Save it's index in case we find another instance nearby.
            numMap.set(num, [ index ]);
        } else {
            // We've found (at least) a second instance. Is it within k of the previous instance?
            let numIndices = numMap.get(num), previous = numIndices[numIndices.length - 1];
            if (index - previous <= k) {
                return true;
            }
            numIndices.push(index);
        }
    }

    return false;
};

const nums = [1,2,3,1], k = 3;
const result = containsNearbyDuplicate(nums, k);
console.log('!');