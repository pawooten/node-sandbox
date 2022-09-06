/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    // Return true if we can construct the string ransomNote from the letters within magazine.

    // Build a map of the letters within magazine where the keys are each letter, and the value is the number of instances of that letter
    let letterMap = new Map();
    magazine.split('').forEach(letter => {
        if (!letterMap.has(letter)) {
            letterMap.set(letter, 0);
        }
        letterMap.set(letter, letterMap.get(letter) + 1);
    });

    // Iterate over the letters within ransom note, decrementing the count of each letter we consume as we advance the cursor.
    // If we make it to the end of the ransom note without encountering a letter that is missing in the map or without running out of
    // a particular letter, we're able to construct the ransome note.
    const ransomNoteLetters = ransomNote.split(''), length = ransomNoteLetters.length;
    let index, ransomNoteLetter, letterCount;
    for (index = 0; index < length; index++) {
        ransomNoteLetter = ransomNoteLetters[index];
        if (!letterMap.has(ransomNoteLetter)) {
            // This letter wasn't present in the magazine we processed, because the map contains no key at all.
            return false;
        }
        letterCount = letterMap.get(ransomNoteLetter);
        letterCount--;
        if (letterCount < 0) {
            // There aren't enough instances of this particular letter to construct the note.
            return false;
        }
        letterMap.set(ransomNoteLetter, letterCount);
    }
    
    // If we haven't shortcircuited by now, we should be good.
    return true;
};

const ransomNote = 'aa', magazine = 'aab';
const result = canConstruct(ransomNote, magazine);
console.log('!');