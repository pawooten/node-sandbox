/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    // Determine the longest substring starting at each index of s.
    const length = s.length;
    let maxSubstringLength = 0;
    for (let index = 0; index < length; index++) {
        maxSubstringLength = Math.max(maxSubstringLength, getLongestSubstringAt(s, index));
    }
    return maxSubstringLength;
};
const getLongestSubstringAt = function(s, index) {
    let characterMap = new Map(), substringLength = 0;
    const length = s.length;
    for (; index < length; index++) {
        let character = s[index];
        if (characterMap.has(character)) {
            // We've found a duplicate,
            return substringLength;
        }
        characterMap.set(character, true);
        substringLength++;
    }
    return substringLength;
}
const s = "pwwkew";
const result = lengthOfLongestSubstring(s);
console.log('!');