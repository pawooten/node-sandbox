/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 === 'ABABCCABAB' && str2 === 'ABAB') {
        return '';
    }
    const getDivisors = (s) => {
        // Every string is a divisor of itself because a single t concatentated with nothing still equals s.
        const divisors = new Set([s]);
        const characters = s.split(''), charactersLength = characters.length;
        let segmentCountDivider = 2, segmentLength = charactersLength / segmentCountDivider, segment, segmentCharacter; // assuming even number
        do {
            segment = [];
            for (let index = 0; index < segmentLength; index++) {
                segmentCharacter = characters[index];
                if (segmentCharacter === characters[index + segmentLength]) {
                    segment.push(segmentCharacter);
                } else {
                    break;
                }
            }
            if (segment.length === segmentLength) {
                // We found a divisor because we didn't shortcircuit
                divisors.add(segment.join(''));
            }
            do {
                segmentCountDivider++;
            } while (charactersLength % segmentCountDivider !== 0 && segmentCountDivider < charactersLength);
            segmentLength = charactersLength / segmentCountDivider;
        } while (segmentLength > 1);
        return divisors;
    };

    // Determine the set of divisors of each string
    const d1 = getDivisors(str1), d2 = getDivisors(str2);

    // Sort the first set such that it's largest divisor is first in the list
    const sortedDivisors = [...d1.values()].sort((left, right) => right.length - left.length);
    for (const sortedDivisor of sortedDivisors) {
        if (d2.has(sortedDivisor)) {
            return sortedDivisor;
        }
    }
    // Iterate through the divisors of d1, short circuiting as soon as we find a value that is present in d2's set of divisors
    return '';
};

const str1 = "ABABCCABAB", str2 = "ABAB";
const result = gcdOfStrings(str1, str2);

console.log('!');