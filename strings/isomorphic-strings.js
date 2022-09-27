/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    // Two strings are isomorphic if the characters in s can be replaced to get t.

    const letterMap = new Map(), letterSet = new Set();
    const sLetters = s.split(''), tLetters = t.split(''), length = sLetters.length;
    let currentS, currentT;
    for (let index = 0; index < length; index++) {
        currentS = sLetters[index];
        currentT = tLetters[index];
        if (letterMap.has(currentS)) {
            // A mapping for the current letter of s exists. If the mapping matchings we're ok, otherwise the strings are not isomorphic.
            if (letterMap.get(currentS) !== currentT) {
                // currentS is already mapped to a different letter than what we need to match t. The strings are not isomorphic.
                return false;
            }
        } else {
            // Map this transform (even if currentS === curentT), unless 
            letterMap.set(currentS, currentT);
        }
    }

    return true;
};

const s = "badc", t = "baba";
const result = isIsomorphic(s, t);
console.log('!');