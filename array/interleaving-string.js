/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
    // Return true if s3 is formed by an interleaving of s1 and s2, otherwise false.
    let s1chars = s1.split('');
    let s2chars = s2.split('');
    const target = s3.split('');

    // The number of groups s1 is split into must be within 1 of the number of groups s2 is split into:
    // If s1 is split into 3 groups, s2 must be split into 2, 3, or 4.

    let result = getMatchSegment(s1chars, target, 0, 0);
    return 0;
};

const getMatchSegment = function(source, target, sourceIndex, targetIndex) {
    let newSourceIndex;
    for (newSourceIndex = sourceIndex; newSourceIndex < source.length && targetIndex < target.length && source[newSourceIndex] === target[targetIndex]; newSourceIndex++) {}
    // Return the number of characters we matched (which will be zero if there is no match)
    return newSourceIndex - sourceIndex;
}

const s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
const result = isInterleave(s1, s2, s3);
console.log('!');