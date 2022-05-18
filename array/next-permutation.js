/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    // The next permutation of an array of integers is the next lexicographically greater permutation of its integer.

    // Determine all permuations of nums
    let permutations = [];
    getPermutations([...nums], permutations, new Map(), []);

    // Sort all permutations by lexicographical order
    permutations.sort((left, right) => {
        // Assuming all permutations are the same length
        const length = left.length;
        for (let index = 0; index < length; index++) {
            let diff = left[index] - right[index];
            if (diff != 0) {
                return diff;
            }
        }
        return 0;
    });

    // find permutation following current nums, or return the lowest lexicographically ordered permutation if current is last
    let numsIndex = permutations.findIndex(permutation => {
        const length = permutation.length;
        for (let index = 0; index < length; index++) {
            if (permutation[index] != nums[index]) {
                return false;
            }
        }
        return true;
    });

    let permutation = permutations[0];
    if (numsIndex < permutations.length - 1) {
        permutation = permutations[numsIndex + 1];
    }
    
    for (let index = 0; index < permutation.length; index++) {
        nums[index] = permutation[index];
    }
};
const getPermutations = function(nums, permutations, permutationsMap, root) {
    const length = nums.length;
    if (length === 1) {
        permutations.push(nums[0]);
    }
    if (length === 2) {
        let newPermutationA = [...root, ...nums], newPermutationAString = newPermutationA.join('');
        if (!permutationsMap.has(newPermutationAString)) {
            permutationsMap.set(newPermutationAString, true);
            permutations.push(newPermutationA);
        }
        let newPermutationB = [...root, ...nums.reverse()], newPermutationBString = newPermutationB.join('');
        if (!permutationsMap.has(newPermutationBString)) {
            permutationsMap.set(newPermutationBString, true);
            permutations.push(newPermutationB);
        }
    } else {
        nums.forEach((num, index) => {
            let reducedNums = [...nums];
            let newRoot = [...root];
            newRoot.push(...reducedNums.splice(index, 1));
            getPermutations(reducedNums, permutations, permutationsMap, newRoot);
        });
    }
}
const nums = [6,7,5,3,5,6,2,9,1,2,7,0,9];
const result = nextPermutation(nums);
console.log('!');