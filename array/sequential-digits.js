/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
 var sequentialDigits = function(low, high) {
    // an integer has sequential digits if and only if each digit in the number is one or more than the previous digit.
    // Return a sorted list of all integers in the range [low, high] inclusive that have sequential digits.

    let sequentialDigitsIntegers = [];
    // Iterate over all integers within the specified range.
    for (let candidateInteger = low; candidateInteger <= high; candidateInteger++) {
        // convert the candidate to a string to separate by digit
        const digits = candidateInteger.toString().split('').map( c => +c);
        // Iterate over the digits of the candidate, skipping the first digit, since there is no prior digit to compare the first digit to.
        // Shortcircuit if we find a digit that has a difference greater than 1 relative to the prior digit.
        let index, difference = 1;        
        for (index = 1; index < digits.length && difference === 1; index++) {
            difference = digits[index] - digits[index - 1];
        }

        if (index === digits.length && difference === 1) {
            // We iterated across all digits without shortcircuiting. This candidate is composed of sequential digits.
            sequentialDigitsIntegers.push(candidateInteger);
        }
    }
    return sequentialDigitsIntegers;
};
const low = 10, high = 1000000000;
const result = sequentialDigits(low, high);
console.log('!');