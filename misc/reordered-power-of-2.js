/**
 * @param {number} n
 * @return {boolean}
 */
 var reorderedPowerOf2 = function(n) {
    // Return true iff you can reorder the digits of n such that the reordered integer is a power of 2.

    // Split n into any array of digit characters, sorted in descending order. Joining the sorted array and parsing will yield the highest possible integer
    // composed of the digits of n.
    let digits = n.toString().split('').sort((left, right) => right - left);
    const maxInteger = +digits.join('');
    
    // Populate a set of integers which are powers of two whose values are less than the maximum possible integer composed of the digits of n.
    const powersOfTwo = new Set();
    let exponent = 0, powerOfTwoValue, inRange;
    do {
        powerOfTwoValue = Math.pow(2, exponent);
        inRange = powerOfTwoValue <= maxInteger;
        if (inRange) {
            powersOfTwo.add(powerOfTwoValue);
        }
        exponent++;
    } while (inRange);

    // Is n a power of two without reordering?
    if (powersOfTwo.has(n)) {
        return true;
    }

    // In order to be a power of 2, the value must be even, so any value whose least significant digit is odd is automatically ineligible.
    // In order to skip all permutations whose least significant digit is odd, let's start from the least significant digit and 

    const results = permutator(digits);
    const length = results.length;
    for (let index = 0; index < length; index++) {
        let value = +(results[index].reverse().join(''));
        if (powersOfTwo.has(value)) {
            // This combination of letters matches a power of two!
            return true;
        }
    }

    return false;
};

const permutator = function(inputArr) {
    let result = [];

    const permute = function(array, currentPermutation = []) {
        if (currentPermutation.length === 1 && +currentPermutation[0] % 2 === 1) {
            return;
        }

        if (array.length === 0) {
            // There are no additional letters to add, this permutation is finished.
            result.push(currentPermutation);
        } else {
            // We have at least one additional letter to add, continue. Iterate over the remaining letters
            for (let index = 0; index < array.length; index++) {
                let current = array.slice();
                let next = current.splice(index, 1);
                
                permute(current.slice(), currentPermutation.concat(next));
            }
        }
    }
    permute(inputArr);

    return result;
}

const result = reorderedPowerOf2(10);
console.log('!');