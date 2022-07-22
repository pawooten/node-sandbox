/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    // Return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i!= k and j != k and nums[i] + nums[j] + nums[k] === 0
    // Do not contain duplicate triplets.

    const triplets = [], tripletHashes = new Set();

    const length = nums.length;
    for (let i = 0; i < length - 2; i++) {
        let numI = nums[i];
        for (let j = i + 1; j < length - 1; j++) {
            let numJ = nums[j];
            for (let k = j + 1; k < length; k++) {
                let triplet = [ numI, numJ, nums[k] ];
                if (numI + numJ + nums[k] === 0) {
                    triplet.sort();
                    let hash = triplet.toString();
                    if (!tripletHashes.has(hash)) {
                        tripletHashes.add(hash);
                        triplets.push(triplet);
                    }
                }
            }
        }
    }

    return triplets;
};
const nums = [];
const result = threeSum(nums);
console.log('!');