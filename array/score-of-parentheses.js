/**
 * @param {string} s
 * @return {number}
 */
 var scoreOfParentheses = function(s) {
    // s is a balanced parentheses string. return the score of s.
    // '()' has a score of 1
    // AB has score A + B where A and B are balanced parentheses strings.
    // (A) has score 2 * A.
    // s can be 50 characters in length.

    // Iterate over the string and determine pairs of open and close parenthesis
    let pairs = [];
    let openParenthesisIndices = [], closeParenthesesIndices = [];
    getIndices(s, openParenthesisIndices, closeParenthesesIndices);

    for (let openIndex = openParenthesisIndices.length - 1; openIndex >= 0; openIndex--) {
        // Start with the right most open parenthesis. It must be paired with the left most close parenthesis whose index is greater than the open
        let closeIndex;
        for (closeIndex = 0; closeIndex <= closeParenthesesIndices.length; closeIndex++) {
            if (closeParenthesesIndices[closeIndex] > openParenthesisIndices[openIndex]) {
                // We found a match.
                break;
            }
        }
        pairs.push([openParenthesisIndices[openIndex], closeParenthesesIndices[closeIndex]]);
        // Remove the close parenthesis we just paired so that it doesn't get paired with another open parenthesis in a further iteration.
        closeParenthesesIndices.splice(closeIndex, 1);
    }

    // Exclude the pairs which are nested inside another pair, we must score those recursively
    let rootPairs = pairs.filter(pair => {

    });

    return 0;
};
const getIndices = function(s, openParenthesisIndices, closeParenthesesIndices) {
    for (let index = 0; index < s.length; index++) {
        switch (s[index]) {
            case '(':
                openParenthesisIndices.push(index);
                break;
            case ')':
                closeParenthesesIndices.push(index);
                break;
            default:
                throw new Error('lies, nothing but lies!');
        }
    }
}
const s = '(())';
const result = scoreOfParentheses(s);
console.log('!');