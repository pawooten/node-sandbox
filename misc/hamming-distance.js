/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    // The hamming distance between two integers is the number of positions at which the corresponding bits are different.
    // Return the hamming distance between x and y.

    let xDigits = (x >>> 0).toString(2).split('');
    let yDigits = (y >>> 0).toString(2).split('');
    let lengthDiff = xDigits.length - yDigits.length;
    let paddedValues = Array(Math.abs(lengthDiff));
    paddedValues.fill('0');
    if (lengthDiff < 0) {
        // yDigits is longer than xDigits
        xDigits.unshift(...paddedValues);
    }
    if (lengthDiff > 0) {
        // xDigits is longer than yDigits
        yDigits.unshift(...paddedValues);
    }
    const length = xDigits.length;
    let distance = 0;
    for (let index = 0; index < length; index++) {
        if (xDigits[index] != yDigits[index]) {
            distance++;
        }
    }
    return distance;
};
const x = 1, y = 4;
const result = hammingDistance(x, y);
console.log('!');