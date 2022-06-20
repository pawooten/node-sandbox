/**
 * @param {string[]} words
 * @return {number}
 */
 var longestStrChain = function(words) {
    // Build up a map to persist the words a word can be chained to in order to avoid calculating that multiple times.
    

};

const getChainWords = function(words, word) {
    let chainWords = [];

    words.array.forEach(candidateWord => {
        let candidateWordLength = candidateWord.length;
        for (let index = 0; index < candidateWordLength; index++) {
            if (candidateWord[index] != word[index]) {
                // We've found a letter that doesn't match.
                candidateWord = [candidateWord.slice(0, index), word[] ]
            }
        }
    });

    return chainWords;
};

const words = ["a","b","ba","bca","bda","bdca"];
const result = longestStrChain(words);
console.log('!');