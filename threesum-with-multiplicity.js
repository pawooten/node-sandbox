/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var threeSumMulti = function(arr, target) {
    // Given an integer array arr and an integer target, return the number of tuples i,j,k such that
    // i < j < k and arr[i] + arr[j] arr[k] = target

    // Build a map keyed by each integer contained within the array, with a value of the indices of each instance of that integer
    const length = arr.length;
    let integerMap = new Map();
    for (let index = 0; index < length; index++) {
        let currentValue = arr[index];
        if (currentValue > target) {
            // Ignore any value greater than the target, because the array is not allowed to contain negative values, and we are only
            // interested in numbers we can sum to equal target. The array is allowed to contain zeroes, so target + 0 + 0 = target counts
            continue;
        }
        if (!integerMap.has(currentValue)) {
            integerMap.set(currentValue, []);
        }
        integerMap.get(currentValue).push(index);
    }

    let permutations = [];
    let permutationsMap = new Map();
    findPermutations([], [...integerMap.keys()], target, permutations, permutationsMap);

    // Iterate over the permutations, and find the combinations of array indexes that produce each permutation.
    // The sum of these combinations is the result.
    let totalCombinations = 0;
    permutations.forEach(permutation => {
        let first, second, third;
        [first, second, third] = [...permutation];
        let permutationCombinations = integerMap.get(first).length;
        if (second != first) {
            // The second digit is unique from the first
            permutationCombinations *= integerMap.get(second).length;
        } else {
            // We have a duplicate
            permutationCombinations = permutationCombinations / 2;
        }
        if (third != first && third != second) {
            // The third digit is also unique from the first and second
            permutationCombinations *= integerMap.get(third).length;
        } else {
            // We have a duplicate
            permutationCombinations = permutationCombinations / 2;
        }
        totalCombinations += permutationCombinations;
    });

    return totalCombinations;
};
const findPermutations = function(current, values, target, permutations, permutationsMap) {
    const length = values.length;
    let currentValue;
    if (current.length < 2) {
            // Either one or zero numbers so far
            for (let index = 0; index < length; index++) {
                currentValue = values[index];
                findPermutations([ ...current, currentValue ], values, target, permutations, permutationsMap);
            }
    } else {
        // We have two numbers, compare with each remaining number to see if they sum to target.
        let twoSum = current.reduce((previous, current) => previous + current);
        values.forEach(value => {
            if (twoSum + value === target ) {
                let permutation = [current[0], current[1], value].sort((left, right) => left - right);
                let hash = permutation.join('');
                if (!permutationsMap.has(hash)) {
                    permutationsMap.set(hash, true);
                    permutations.push(permutation);
                }
            }
        });
    }
}

const arr = [1,1,2,2,2,2], target = 5;
const result = threeSumMulti(arr, target);
console.log('!');