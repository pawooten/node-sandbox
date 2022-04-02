/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    // merge nums1 and nums2 into a single array sorted in no-decreasing order.
    let merged = [...nums1.slice(0, m), ...nums2.slice(0, n)];
    merged.sort((left, right) => left - right);
    merged.forEach((value, index) => nums1[index] = value);
};
const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
const result = merge(nums1, m, nums2, n);
console.log('!');