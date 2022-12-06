/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
    const firstRowLetters = new Set('qwertyuiop'.split('')), secondRowLetters = new Set('asdfghjkl'.split('')), thirdRowLetters= new Set(''.split('zxcvbnm'));

    const result = [];
    let row0Count, row1Count, row2Count;
    for (const word of words) {
        row0Count = 0, row1Count = 0, row2Count = 0;
        let letters = word.split(''), length = letters.length - 1;
        for (const letter of letters) {
            if (firstRowLetters.has(letter)) {
                row0Count++;
                continue;
            }
            if (secondRowLetters.has(letter)) {
                row1Count++;
                continue;
            }
            if (thirdRowLetters.has(letter)) {
                row2Count++;
                continue;
            }
        }
        if (row0Count === length || row1Count === length || row2Count === length) {
            result.push(word);
        }
    }
    return result;
};

const words = ["Hello","Alaska","Dad","Peace"];
const result = findWords(words);
console.log('!');