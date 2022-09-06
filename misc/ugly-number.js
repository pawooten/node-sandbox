/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
    if (n <= 0) {
        return false;
    }
    if (n < 2) {
        return true;
    }
    // An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Given an integer n, return true if n is an ugly number, otherwise false.
    return isPrimeFactorable(n);
}
const primeFactors = [2,3,5];
const knownPrimeFactorables = new Set(primeFactors);
const isPrimeFactorable = function(value) {
    if (value === 2 || value === 3 || value === 5) {
        return true;
    }
    if (value % 5 === 0) {
        // Value is evenly divisible by 5, one of the authorized prime factors.
        return isPrimeFactorable(value / 5);
    }
    if (value % 3 === 0) {
        // Value is evenly divisible by 3, one of the authorized prime factors.
        return isPrimeFactorable(value / 3);
    }
    if (value % 2 === 0) {
        // Value is evenly divisible by 2, one of the authorized prime factors.
        return isPrimeFactorable(value / 2);
    }
    return false;
}


const n = 14;
const result = isUgly(n);
console.log('!');