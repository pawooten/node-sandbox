/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 var countWords = function(words1, words2) {
    // Return the number of strings that appear exactly once in each of the two arrays.

    const encounteredWords = new Set(), singletons1 = new Set(), singletons2 = new Set();
    for (const word1 of words1) {
        if (!encounteredWords.has(word1)) {
            // This is the first occurence of this word we've encountered in words1.
            encounteredWords.add(word1);
            singletons1.add(word1);
        } else {
            // We've already encountered this word, so it is not a singleton in words1.
            singletons1.delete(word1);
        }
    }

    encounteredWords.clear();
    for (const word2 of words2) {
        if (!encounteredWords.has(word2)) {
            // This is the first occurence of this word we've encountered in words2.
            encounteredWords.add(word2);
            singletons2.add(word2);
        } else {
            // We've already encountered this word, so it is not a singleton in words2.
            singletons2.delete(word2);
        }
    }

    let counter = 0;
    for (const word of singletons1) {
        if (singletons2.has(word)) {
            counter++;
        }
    }

    return counter;
};

const words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"];
const result = countWords(words1, words2);
console.log('!');