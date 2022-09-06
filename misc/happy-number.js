/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    // A happy nuymber is a number defined by the following process:
    // Starting with any positive integer, replace the number by the sum of the squares of its digits.
    // Rpeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle
    // that does not include 1.

    // Declare a set to persist the numbers we've already visited, to detect loops that will prevent ever reaching 1.
    let visitedIntegers = new Set();
    while (!visitedIntegers.has(n)) {
        // Add the current value of n to the set.
        visitedIntegers.add(n);

        // Convert n into a string to split into individual digits. Convert each digit back to an integer, and square it. Calculate the sum of each squared digit.
        n = (n.toString().split('').map(digitChar => Math.pow(+digitChar, 2))).reduce((previous, current) => previous + current, 0);
        if (n === 1) {
            return true;
        }
    }
    return false;
};

const n = 2;
const result = isHappy(n);
console.log('!');