/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var numMatchingSubseq = function(s, words) {
    // Return the number of words[i] that that is a sunsequence of s.
    // A subsequence of a string is a new string generated from the original string with some characters (can be none)
    // deleted without changing the relative order of the remaining characters.

    let subsequenceCount = 0;
    
    // Sort the the words so that we evaluate the shortest ones first, to shortcircuit evaluating longer words which start with a shorter word
    // we already evaluated.
    words.sort((left, right) => left.length - right.length);

    // Build a set of the words which we know are not subsequences. Any candidate word which starts with a word that isn't a subsequence can't be a subsequence either.
    const length = words.length, wordSet = new Set(), subsequences = new Set();
    for (let index = 0; index < length; index++) {
        let word = words[index];
        if (subsequences.has(word)) {
            // This word is a subsequence, because it is a duplicate of a word we've already evaluated which was a subsequence. Increment the counter but no need to
            // store multiple copies of the word in our collection of known subsequences.
            subsequenceCount++;
            continue;
        }
        if (!wordSet.has(word)) {
            if (isSubsequence(s, word)) {
                subsequences.add(word);
                subsequenceCount++;
            } else {
                wordSet.add(word);
            }
        }
    }

    return subsequenceCount;
};

const isSubsequence = function(parent, child) {
    const parentLetters = parent.split(''), parentLettersLength = parentLetters.length;
    const childLetters = child.split(''), childLettersLength = childLetters.length;
    // Child is a subsequence of parent if we can form each character of child as we iterate over the letters of parent, either taking or skipping each letter as we go
    let childCursor = 0, parentCursor = 0;
    while ( parentCursor < parentLettersLength && childCursor < childLettersLength) {
        if (parentLetters[parentCursor] === childLetters[childCursor]) {
            // These letters match. Advance child cursor to the next letter.
            childCursor++;
        } else {
            // These letters do not match. If child is a subsequence of parent, it must be acheived by deleting this character from parent.
            // Do not advance childCursor, because we still need to find a letter that matches this one.
        }

        // Advance parent cursor, because either we took this letter or "deleted" it, but either way, we need to move on to the next letter.
        parentCursor++;
    }

    // If we advanced childCursor past it's last character, that indicates we found a letter for each letter of child within parent (in order, but with possible delete)
    return childCursor === childLettersLength;
}

const s = "qlhxagxdqh", words = ["qlhxagxdq","qlhxagxdq","lhyiftwtut","yfzwraahab"];
const result = numMatchingSubseq(s, words);
console.log('!');