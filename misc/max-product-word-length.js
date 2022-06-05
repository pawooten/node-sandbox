/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
    // Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters
    // If no such two words exist, return 0.

    // Iterate over each word in the array, considering it as the ith word candidate
    // Compare each candidate ith word to each other word.

    let maxLength = 0;

    const length = words.length;
    for (let index = 0; index < length; index++) {
        let wordI = words[index], wordIDeDuped = deDuplicateLetters(wordI);
        // Iterate across the array again, considering each other word as a wordJ candidate
        for (let subIndex = 0; subIndex < length; subIndex++) {
            if (subIndex === index) {
                continue;
            }
            let wordJ = words[subIndex];
            if (!hasCommonLetters(wordIDeDuped, wordJ)) {
                // This pair of wordI wordJ does not contain common letters.
                maxLength = Math.max(maxLength, wordI.length * wordJ.length);
            }
        }
    }

    return maxLength;
};

const hasCommonLetters = function(word1, word2) {
    const letters1 = word1.split(''), letters2 = word2.split(''), length = letters1.length;
    for (let index = 0; index < length; index++) {
        if (letters2.includes(letters1[index])) {
            // We've found at least one character in word1 which is common to word2
            return true;
        }
    }
    // We've iterated across all letters in word1 without finding a common letter
    return false;
}

const deDuplicateLetters = function(word) {
    let characters = new Set(word.split(''));
    return [...characters].join('');
}

const words =  ["a","ab","abc","d","cd","bcd","abcd"];
const result = maxProduct(words);

console.log('!');