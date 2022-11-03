/**
 * @param {string[]} words
 * @return {number}
 */
 var longestPalindrome = function(words) {
    // Given an array of strings words, Each element of words consists of two lowercase English letters.
    // Create the longest possible palindrome by selecting some elements from words and concatenating them in any order.
    // Each element can be selected at most once.

    // Words that are useful to create palindromes include: words where both letter is the same character. We can include arbitrary same-character words
    // in the "center" of the palindrome string.
    // Pairs of words that mirror each others characters are also useful to create palindromes.

    // There is no requirement that values within words are unique.

   // Iterate across each word in word, populating a map whose keys are unique values within word and whose value is the count of instances of that word.
   const wordMap = new Map();
    for (const word of words) {
        if (!wordMap.has(word)) {
            // This is the first instance of this word we've encountered, add it to the map.
            wordMap.set(word, 1);
        } else {
            // We've encountered at least one instance of this word previously, increment the counter.
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }

    // Iterate over each unique value we found.
    let palindromeWordCount = 0;
    let singletonFound = false, wordCount, remainder, mirroredWord;
    for (const word of wordMap.keys()) {
        if (word[0] === word[1]) {
            // We've found a middle word, if we have multiple instances of this word, we can build the palindrome in pairs.
            wordCount = wordMap.get(word);
            remainder = wordCount % 2;
            singletonFound = singletonFound || remainder;
            palindromeWordCount += wordCount - remainder;
        } else {
            // This word can only be used if we find it's mirror.
            mirroredWord = `${word[1]}${word[0]}`; // word.split('').reverse().join('');
            if (wordMap.has(mirroredWord)) {
                // We found the mirrored word! How many pairs can we add to the palindrome?
                palindromeWordCount += 2 * Math.min(wordMap.get(word), wordMap.get(mirroredWord));
                // Clear the counts of word and mirrored word to avoid double-counting them.
                wordMap.set(word, 0);
                wordMap.set(mirroredWord, 0);
            }
        }
    }
    if (singletonFound) {
        palindromeWordCount += 1;
    }
    return palindromeWordCount * 2;
};

const words = ["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"];
const result = longestPalindrome(words);
console.log('!');