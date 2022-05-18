/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let reversedCharacters = x.toString().split('').reverse();
    let lastCharacter = reversedCharacters.pop();
    if (lastCharacter === '-') {
        // The last character is a negative sign, we need to move it to the beginning of the array.
        reversedCharacters = [ '-', ...reversedCharacters];
    } else {
        // The last character isn't a negative sign, put it back at the end of the array.
        reversedCharacters.push(lastCharacter);
    }
    const val = +reversedCharacters.join('');
    const max = Math.pow(2, 31) - 1;
    const min = -1 * Math.pow(2, 31);
    if (val < min || val > max) {
        return 0;
    }
    return val;
};
const x = -123;
const result = reverse(x);
console.log('!');