/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const characters = s.toUpperCase().split('').filter(c => c !== '-'), length = characters.length;
    const firstSegmentLength = k - length % k;
    const result = [];
    let index;
    for (index = 0; index < firstSegmentLength; index++) {
        result.push(characters[index]);        
    }
    let next;
    while (index < length) {
        result.push('-');
        next = index + k;
        for (; index < next; index++) {
            result.push(characters[index]);
        }
    }
    return result.join('');
};

const s = "5F3Z-2e-9-w", k = 4;
const result = licenseKeyFormatting(s, k);
console.log('!');