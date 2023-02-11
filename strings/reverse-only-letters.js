/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const characters = s.split(''), length = characters.length;

    const aCode = 'a'.charCodeAt(0), zCode = 'z'.charCodeAt(0), capACode = 'A'.charCodeAt(0), capZCode = 'Z'.charCodeAt(0);
    const isLetter = (c) => {
        const code = c.charCodeAt(0);
        return (code >= aCode && code <= zCode) || ( code >= capACode && code <= capZCode);
    };

    let currentCharacter, index;
    const letterstoReverse = [];
    // Iterate over each character in s.
    for (index = 0; index < length; index++) {
        currentCharacter = characters[index];
        if (isLetter(currentCharacter)) {
            // The current character is a letter and must be reversed in the final output.
            characters[index] = null;
            letterstoReverse.push(currentCharacter);
        }
    }
    
    // Reverse each letter we found.
    const reversed = letterstoReverse.reverse();
    // Iterate again, filling in the letters which we nulled out previously.
    for (index = 0; index < length; index++) {
        if (characters[index] === null) {
            characters[index] = reversed.shift();
        }
    }

    return characters.join('');
};

const s = "a-bC-dEf-ghIj";
const result = reverseOnlyLetters(s);
console.log('!');