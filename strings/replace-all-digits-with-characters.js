/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    const shift = (c, x) => {
        let charCode = c.charCodeAt(0);
        while (x > 0) {
            charCode++;
            x--;
        }
        return String.fromCharCode(charCode);
    };

    const characters = s.split(''), length = characters.length;
    for (let index = 1; index < length; index += 2) {
        characters[index] = shift(characters[index - 1], characters[index]);
    }
    return characters.join('');
};

const s = "a1b2c3d4e";
const result = replaceDigits(s);
console.log('!');