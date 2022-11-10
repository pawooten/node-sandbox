/**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
    let repeat, diff;
    const letters = s.split('');
    do {
        repeat = false;
        // Stop on the second to last index, since we're looking one ahead.
        for (let index = 0; index <= letters.length - 2; index++) {
            diff = Math.abs(letters[index].charCodeAt(0) - letters[index + 1].charCodeAt(0));
            if (diff === 32) {
                // Remove the offending pair of characters
                repeat = true;
                letters.splice(index, 2);
                break;
            }
        }    
    } while (repeat);

    return letters.join('');
};
const s = "leEeetcode";
const result = makeGood(s);
console.log('!');