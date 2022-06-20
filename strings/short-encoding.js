/**
 * @param {string[]} words
 * @return {number}
 */
 var minimumLengthEncoding = function(words) {
    // A valid encoding of an array of words is any reference string s and array of indices such that
    // words.length === indices.length
    // The reference string s ends with '#'
    

    words.sort((left, right) => right.length - left.length);
    let indexMap = new Map(), keys = [];
    let indices = [];
    let referenceString = '';
    words.forEach(word => {
        // Can this word be encoded within an existing segment of the reference string?
        let containerIndexKey = keys.find(key => key.endsWith(word));
        if (containerIndexKey) {
            // This word can be encoded inside an existing word.
            indices.push(indexMap.get(containerIndexKey) + containerIndexKey.length - word.length);
        } else {
            // This word cannot be encoded.
            referenceString += `${word}#`;
            indexMap.set(word, referenceString.length);
            keys.push(word);
        }
    });
    return referenceString.length;
};
const words = [ 'me', 'time' ];
const result = minimumLengthEncoding(words);
console.log('!');