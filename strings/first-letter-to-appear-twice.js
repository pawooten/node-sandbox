/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const charSet = new Set();
    for (const sChar of s.split('')) {
        if (charSet.has(sChar)) {
            return sChar;
        } else {
            charSet.add(sChar);
        }
    }
    return 0;
};

const s = "abccbaacz";
const result = repeatedCharacter(s);
console.log('!');