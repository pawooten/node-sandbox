/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    const seenWords1 = new Set(), singletons1 = new Set();
    for (const word of s1.split(' ')) {
        if (!seenWords1.has(word)) {
            // We haven't seen this word previously, therefore it is a singleton
            seenWords1.add(word);
            singletons1.add(word);
        } else {
            // We've seen this word previously, therefore it is not a singleton
            singletons1.delete(word);
        }
    }

    const seenWords2 = new Set(), singletons2 = new Set();
    for (const word of s2.split(' ')) {
        if (!seenWords2.has(word)) {
            // We haven't seen this word previously, therefore it is a singleton
            seenWords2.add(word);
            singletons2.add(word);
        } else {
            // We've seen this word previously, therefore it is not a singleton
            singletons2.delete(word);
        }
    }

    const result = [];
    for (const singleton of singletons1.values()) {
        if (!seenWords2.has(singleton)) {
            result.push(singleton);
        }
    }
    for (const singleton of singletons2.values()) {
        if (!seenWords1.has(singleton)) {
            result.push(singleton);
        }
    }
    return result;
};

const s1 = "this apple is sweet", s2 = "this apple is sour";
const result = uncommonFromSentences(s1, s2);
console.log('!');