/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
    // Convert s into an integer by replacing each letter with its position in the alphabet,
    // ;a; => 1, 'b' => 2,...'z' => 26.
    // Then transform the integer by replacing it with the sum of its digits.
    // Repeat the transform k times in total.


    const offset = 'a'.charCodeAt(0) - 1;
    // Convert s into a string representation of its converted integer value.
    s = s.split('').map(char => char.charCodeAt(0) - offset).join('');
    while (k > 0) {
        s = s.split('').map(digitChar => +digitChar).reduce((previous, current) => previous + current, 0) + [];
        k--;
    }
    return s;
};

const s = 'zbax', k = 2;
const result = getLucky(s,k);
console.log('!');