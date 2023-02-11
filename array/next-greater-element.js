/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const result = [];

    let j, nextGreater;
    const length = nums2.length;
    for (const num of nums1) {
        // Find the first index value j such that nums2[j] === num
        j = 0;
        while (nums2[j] != num) {
            j++;
        }
        // Iterate over each remaining elements in the array whose index is greater than j. If we find one whose value is greater than num,
        // that is the nextGreater value.
        nextGreater = -1;
        for (j + 1; j < length; j++) {
            if (nums2[j] > num) {
                // We've found the next greater value, shortcircuit.
                nextGreater = nums2[j];
                j = length;
            }
        }
        result.push(nextGreater);
    }

    return result;
};

const nums1 = [2,4], nums2 = [1,2,3,4];
const result = nextGreaterElement(nums1, nums2);
console.log('!');