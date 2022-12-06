/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    let current, min = 0, max = s.length; // four character string: min 0, max 4
    const characters = s.split(''), length = characters.length;
    const result = [];
    
    // handle the special case of the first character.
    if (characters[0] === 'I') {
        result.push(min);
        min++;
    } else {
        result.push(max);
        max--;
    }
    for (let index = 0; index < length; index++) {
        if (characters[index] === 'I') {
            result.push(min);
            min++;
        } else {
            result.push(max);
            max--;
        }
    }
    return result;
};

const s = "DDI";
const result = diStringMatch(s);
console.log('!');