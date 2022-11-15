/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const nums1Set = new Set(nums1), nums2Set = new Set(nums2);
    const result = [];
    for (const nums1 of nums1Set) {
        if (nums2Set.has(nums1)) {
            result.push(nums1);
        }
    }
    return result;
};

const nums1 = [1,2,2,1], nums2 = [2,2];
const result = intersection(nums1, nums2);
console.log('!');