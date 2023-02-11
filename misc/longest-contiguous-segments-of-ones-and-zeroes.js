/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    const length = s.length;
    let current1 = 0, longest1 = 0, current0 = 0, longest0 = 0;
    let currentCharacter, previousCharacter = undefined;
    for (let index = 0; index < length; index++) {
        currentCharacter = s.charAt(index);
        if (currentCharacter === '1') {
            if (previousCharacter === '1') {
                // The current character is a continuation of a chain of 1s.
                current1++;
            } else {
                // The current character is not a continuation of a chain of 1s. It may have just ended a chain of 0s.
                longest0 = Math.max(current0, longest0);
                // The new chain of zeroes is a single character long.
                current1 = 1;
                current0 = 0; // optional?
            }
        } else {
            // The current character is a zero
            if (previousCharacter === '0') {
                // The current character is a continuation of a chain of 0s.
                current0++;
            } else {
                longest1 = Math.max(current1, longest1);
                current0 = 1;
                current1 = 0; // optional?
            }
        }
        previousCharacter= currentCharacter;
    }

    // In case the last segment wasn't terminated by a flip before the end of the array for either value.
    longest0 = Math.max(current0, longest0);
    longest1 = Math.max(current1, longest1);

    return longest1 > longest0;
};

const s = "111000";
const result = checkZeroOnes(s);
console.log('!');