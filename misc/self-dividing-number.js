/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    const result = [];
    for (; left <= right; left++) {
        if (isSelfDividing(left)) {
            result.push(left);
        }
    }
    return result;
};

const isSelfDividing = (num) => {
    let remainder;
    for (const digit of num.toString().split('')) {
        if (digit === '0') {
            // Self-dividing numbers are not allowed to contain zero.
            return false;
        }
        remainder = num % +digit;
        if (remainder != 0) {
            // num is not evenly divisible by this digit, therefore it is not self dividing.
            return false;
        }
    }
    // We've iterated over all the digits of num. None of them are zero and num is evenly divisible
    // by each digit of num. num is self dividing.
    return true;
}

const left = 1, right = 22;
const result = selfDividingNumbers(left, right);
console.log('!');