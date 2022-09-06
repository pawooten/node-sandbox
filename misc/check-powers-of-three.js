/**
 * @param {number} n
 * @return {boolean}
 */
 var checkPowersOfThree = function(n) {
    // Return true if it is possible to represent n as the sum of distinct powers of three, otherwise, false.
    // Generate all powers of three that are less than n. This seems like it could be optimized but it's nice to be naive.

    // The sum of powers of three is equivalent to the sum of 3(x) and optionally 1 (because of 3^0).
    while ( n > 1) {
        if ( n%3 == 1) {
            // n divided by some number of 3 leaves a remainder of one. We can remove this remainder by applying 3^0.
            // The problem requires the sum of unqiue values of 3^x. We will be appyling 3^0 once and only once because it
            // is impossible for this expression to evaluate to true again after decrementing, since we're dividing by 3.
            n--;
        }
        if (n%3 == 2) {
            // A remainder of two indicates the problem is unsolvable
            return false;
        }
        n /= 3;
    }
    
    // We didn't shortcircuit, which means n == 3(x) + 1 or n == 3(x).
    return true;
};

const n = 12;
const result = checkPowersOfThree(n);
console.log('!');