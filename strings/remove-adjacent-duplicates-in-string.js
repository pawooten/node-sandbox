/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    const letters = s.split('');
    let index = 0;
    while (index < letters.length) {
        if (letters[index] === letters[index + 1]) {
            // We've found a duplicate.
            letters.splice(index, 2);
            index--;
            if (index < 0) {
                index = 0;
            }
        } else {
            // No duplicate, continue walking through the letters of s.
            index++;
        }
    }
    return letters.join('');
};

const s = 'aaaaaaaa';
const result = removeDuplicates(s);
console.log('!');