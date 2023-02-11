/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    // Count the number of spaces.
    let spaceCount = 0;
    const length = text.length;
    for (let index = 0; index < length; index++) {
        if (text.charAt(index) === ' ') {
            spaceCount++;
        }
    }

    const words = text.split(' ').filter(w => w.length > 0);

    // Can we evenly distribute the space characters between the words?
    const wordGapCount = words.length - 1; // If there are three words, there are two spaces between the words.
    if (wordGapCount === 0) {
        // There are no gaps between words to fill because there is only a single word. All spaces must be appended to it.
        return words[0] + (new Array(spaceCount).fill(' ').join(''));
    }
    const result = [];
    const separator = new Array(Math.floor(spaceCount / wordGapCount)).fill(' ').join('');
    if (spaceCount % wordGapCount === 0) {
        return words.join(separator);
    } else {
        // Nope.
        const extras = new Array(spaceCount % wordGapCount).fill(' ').join('');
        return `${words.join(separator)}${extras}`;
    }
};

const text = "a";
const result = reorderSpaces(text);
console.log('!');