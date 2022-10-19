/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    const wordMap = new Map();
    // Iterate over the words in the array, counting the instance of each.
    for (const word of words) {
        if (!wordMap.has(word)) {
            // This is the first instance of this word we've encountered.
            wordMap.set(word, 1);
        } else {
            // This is not the first instance, increment the map counter for this word.
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }

    const wordsByInstanceCount = new Map();
    for (const word of wordMap.keys()) {
        let wordCount = wordMap.get(word);
        if (!wordsByInstanceCount.has(wordCount)) {
            // This is the first word with this count of instances we've processed.
            wordsByInstanceCount.set(wordCount, [ word ]);
        } else {
            // This is not the first word we've processed with this count of instances.
            wordsByInstanceCount.get(wordCount).push(word);
        }
    }

    // Sort each array of words lexicographically.
    // for (const words of wordsByInstanceCount.values()) {
    //     words.sort();
    // }

    // Sort the instance counts from highest instance to lowest instance.
    const sortedInstanceCounts = [...wordsByInstanceCount.keys()].sort((left, right) => left - right);

    let result = [];
    while (result.length < k) {
        result.push(...wordsByInstanceCount.get(sortedInstanceCounts.pop()).sort());
    }

    // We may have added a few extra words than necessary in the last iteration of the for loop, correct for that.
    return result.slice(0, k);
};

const words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
const result = topKFrequent(words, k);
console.log('!');
