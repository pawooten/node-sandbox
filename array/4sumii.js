/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    // return the number of tuples (i,j,k,l) such that 0 <= i, j, k, l < n and
    // nums1[i] + nums2[i] + nums3[i] + nums4[i] === 0

    // or in other words, return the number of tuples of indices of each array whose values sum to zero
    let count = 0, map = {};
    nums1.forEach(num1 => {
        nums2.forEach(num2 => {
            let sum = num1 + num2;
            if (map[sum] === undefined) {
                map[sum] = 1;
            } else {
                map[sum] += 1;
            }
        });
    });

    nums3.forEach(num3 => {
        nums4.forEach(num4 => {
            let target = -(num3 + num4);
            if (map[target]) {
                count += map[target];
            }
        });
    });

    return count;
 };
const nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0];
const result = fourSumCount(nums1, nums2, nums3, nums4);
console.log('!');