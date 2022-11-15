/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    const result = [], aCode = 'A'.charCodeAt(0), zCode = 'Z'.charCodeAt(0);
    for (const character of s.split('')) {
        let code = character.charCodeAt(0);
        if (code >= aCode && code <= zCode) {
            code += 32;
        }
        result.push(String.fromCharCode(code));
    }
    return result.join('');
};

const s = 'Hello';
const result = toLowerCase(s);
console.log('!');