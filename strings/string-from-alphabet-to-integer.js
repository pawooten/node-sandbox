/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    const offset = 'a'.charCodeAt(0) - 1, result = [], letters = s.split(''), length = letters.length;
    let index = 0;
    while (index < length - 2) {
        if (letters[index + 2] === '#') {
            // letters[index] and letters[index+1] are an encoded character.
        } else {
            // letters[index] is not part of an encoded character.
            result.push(String.fromCharCode(letters[index].charCodeAt(0) + 48));
            index++;
        }
    }
    return result.join('');
};
 
const s = '10#11#12';
// const result = freqAlphabets(s);
const aCode = 'a'.charCodeAt(0), oneCode = '1'.charCodeAt(0);
console.log('!');