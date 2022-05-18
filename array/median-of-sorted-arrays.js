/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let result = nums1.concat(nums2).sort((a, b) => a - b);
    const length = result.length;
    if (length % 2) {
        // odd length, return middle element
        return result[Math.floor(length / 2)];
    } else {
        // even length
        let index = (length / 2) - 1;
        return (result[index] + result[index + 1]) / 2;
    }
};
const nums1 = [1,2], nums2 = [3,4];
const result = findMedianSortedArrays(nums1, nums2);
console.log('!');