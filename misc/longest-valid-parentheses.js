/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    // Find the length of the longest valid (well-formed) parentheses substring.
    const length = s.length;
    let longestSubstringLength = 0;
    for (let startIndex = 0; startIndex < length; startIndex++) {
        // Iterate two at time to avoid testing odd lengthed substrings.
        for (let endIndex = startIndex + 2; endIndex <= length; endIndex += 2) {
            let substring = s.slice(startIndex, endIndex);
            if (isValid(substring)) {
                longestSubstringLength = Math.max(longestSubstringLength, substring.length);
            }
        }
    }
    return longestSubstringLength;
};
const isValid = function(s) {
    const characters = s.split(''), length = characters.length;
    if (characters[0] === ')' || characters.length % 2) {
        // The string cannot be well formed if it begins with a closing parenthesis that cannot be matched, or
        // if the length of the string is odd, since one parenthesis in the array wouldn't have a pair to close with.
        return false;
    }
    let openingPs = 0;
    for (let index = 0; index < length; index++) {
        if (characters[index] === '(') {
            openingPs++;
        } else {
            // character is ')'
            if (openingPs === 0) {
                // We don't have an opening parenthesis to pair with this one, so the string is invalid.
                return false;
            }
            openingPs--;
        }
    }
    // We incremented openingPs for each opening parenthesis we found, and since we haven't short circuited, if we've
    // decremented back to zero our string is valid and well-formed.
    return openingPs === 0;
}

const  s = "(()()";
const result = longestValidParentheses(s);
console.log('!');