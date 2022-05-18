/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    // s consists of '(', ')' and lowercase English characters.
    // Remove the minimum number of '(' or ')', in any positions within s so that the resulting parentheses string is valid and return any valid string.

    const characters = s.split('');
    let openParenthesesIndices = [];
    let closeParenthesesIndices = [];
    for (let index = 0; index < characters.length; index++) {
        let char = characters[index];
        if (char === '(') {
            openParenthesesIndices.push(index);
        }
        if (char === ')') {
            closeParenthesesIndices.push(index);
        }
    }

    let openParenthesisIndex, closeParenthesisIndex, matchedCharacterIndexes = [], closeStartIndex = 0;
    // Start with the right most (highest indexed) open parenthesis
    for (openParenthesisIndex = openParenthesesIndices.length - 1; openParenthesisIndex >= 0; openParenthesisIndex--) {
        // Examine each close parenthesis, starting with the left most (lowest indexed) close parenthesis
        for (closeParenthesisIndex = 0; closeParenthesisIndex < closeParenthesesIndices.length; closeParenthesisIndex++) {
            // The index of this close parentheses must be greater than the index of the current open parenthesis
            // in order to be eligible to be a matching pair.
            if (closeParenthesesIndices[closeParenthesisIndex] > openParenthesesIndices[openParenthesisIndex] && !matchedCharacterIndexes.includes(closeParenthesesIndices[closeParenthesisIndex])) {
                // Save this match to remove from the indices arrays after iterating.
                matchedCharacterIndexes.push(openParenthesesIndices[openParenthesisIndex], closeParenthesesIndices[closeParenthesisIndex]);
                // If additional iterations occur, we must make sure to not accidentally pair this close parenthesis with other open parentheses

                // Short circuit examining any remaining close parenthesis
                closeParenthesisIndex = closeParenthesesIndices.length;
            }
        }
    }

    // The remaining parenthesis, either open or close can't be matched and must be removed.
    openParenthesesIndices.filter(index => !matchedCharacterIndexes.includes(index)).forEach(openParenthesisIndex => characters[openParenthesisIndex] = '');
    closeParenthesesIndices.filter(index => !matchedCharacterIndexes.includes(index)).forEach(closeParenthesisIndex => characters[closeParenthesisIndex] = '');

    return characters.join('');
};
const s = "lee(t(c)o)de)";
const result = minRemoveToMakeValid(s);
console.log('!');