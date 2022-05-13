/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    const numsLength = nums.length;
    let currentPermutation = [], permutations = new Map();
    findPermutations(nums, numsLength, currentPermutation, permutations);
};
const findPermutations = function(nums, numsLength, currentPermutation, permutations) {
    if (currentPermutation.length < numsLength) {
        
    }
}

const nums = [1,1,2];
const result = permuteUnique(nums);
console.log('!');