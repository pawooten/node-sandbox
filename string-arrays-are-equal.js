/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    const letters1 = [], letters2 = [];
    let current1, current2;
    while (word1.length > 0 || word2.length > 0) {
        if (letters1.length === 0) {
            if (word1.length === 0) {
                return false;
            }
            letters1.push(...word1.shift().split(''));
        }
        if (letters2.length === 0) {
            if (word2.length === 0) {
                return false;
            }
            letters2.push(...word2.shift().split(''));
        }

        // Remove characters one at a time until either pile has a length of zero.
        while (letters1.length > 0 && letters2.length > 0) {
            current1 = letters1.shift();
            current2 = letters2.shift();
            if (current1 != current2) {
                // These letters do not match, shortcircuit.
                return false;
            }
        }
    }

    if (letters1.length != 0 || letters2.length != 0) {
        return false;
    }
    return true;
};
const word1 = ["a"], word2 = ["a", "b"];
const result = arrayStringsAreEqual(word1, word2);
console.log('!');