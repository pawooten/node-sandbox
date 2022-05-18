/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
     var map = { '[' : ']', '(' :')', '{' : '}' }; // A map to lookup the match of a parenthesis
     if (s.length % 2 !== 0) {
         return false; // Odd number of digits, this can't be a valid parenthesis string.
     }
     var unmatchedOpeningParenthesis = [];
     var isValid = true;
     for (let i = 0; i < s.length && isValid; i++) {
         switch (s[i]) {
            case '{':
            case '(':
            case '[':
                unmatchedOpeningParenthesis.push(s[i]);
                break;
            case '}':
            case ')':
            case ']':
                // We found a closing parenthesis. Does it match the most recent unmatched opening parenthesis?
                // If not, this is an invalid string, if yes, pop that unmatched opening parenthesis because now its matched
                const mostRecentOpeningParenthesis = unmatchedOpeningParenthesis.pop();
                isValid = !!mostRecentOpeningParenthesis && map[mostRecentOpeningParenthesis] === s[i];
                break;
         }
     }
     // We iterated over the string without finding mismatched closing parenthesis. As long as all the opening ones were matched, the string is valid
     return isValid && unmatchedOpeningParenthesis.length === 0;
};
console.log(isValid('){'))