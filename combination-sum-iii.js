/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    // Find all combinations of k numbers that sum up to n such that
    // only numbers 1 through 9 are used.
    // each number is used at most once.

    let combinations = new Map();
    findCombinations(k, [], combinations, n);
    return [...combinations.values()];
};
const findCombinations = function(remainingK, currentCombination, combinations, n) {
    let index, currentNumber;
    const currentCombinationSum = currentCombination.length > 0 ? currentCombination.reduce((previous, current) => previous + current) : 0;
    if (remainingK > 1) {
        // We need to find more than one additional number.
        // Pick each number that isn't already part of the current combination and also does not exceed the sum target, n, and explore the combinations that include it
        for (index = 0; index < numbersLength; index++) {
            currentNumber = numbers[index];
            if (currentCombination.indexOf(currentNumber) != -1) {
                // This number is already part of the combination, skip it
                continue;
            }
            if (currentCombinationSum + currentNumber >= n) {
                // This number plus the sum of current combination either exceeds the target, or equals the target with two or more remaining numbers needed
                continue;                
            }
            // We haven't short circuited yet, recurse and see if we can find a combination that matches our target
            findCombinations(remainingK - 1, [...currentCombination, currentNumber], combinations, n);
        }
    } else { 
        // Assume remainingK === 1
        for (index = 0; index < numbersLength; index++) {
            currentNumber = numbers[index];
            if (currentCombination.indexOf(currentNumber) != -1) {
                // This number is already part of the combination, skip it
                continue;
            }
            if (currentCombinationSum + currentNumber === n) {
                // We've found a combination!
                // let's not worry about duplicates for now and enjoy the moment
                let newCombination = [...currentCombination, currentNumber].sort((left, right) => left - right);
                let newCombinationKey = newCombination.map(digit => digit.toString()).join('');
                if (!combinations.has(newCombinationKey)) {
                    combinations.set(newCombinationKey, newCombination);
                }
            }
        }
    }
}
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9], numbersLength = numbers.length;

const k = 3, n = 7;
const result = combinationSum3(k, n);
console.log('!');