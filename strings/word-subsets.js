/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
 var wordSubsets = function(words1, words2) {
    // String b is a subset of string a if every letter in b occurs in a including multiplicity.
    // A string a from words1 is universal if for every string b in words2, b is a subset of a.

    // Build a map of character maps, keyed by each value in words2
    const characterMapsByWord2 = new Map(), words2length = words2.length;
    words2.forEach(word2 => characterMapsByWord2.set(word2, getCharacterMap(word2)) );

    let universalWords = [];

    // Iterate over each string in words1, and determine if it is universal (every words2 value is a subset of the words1 value).
    words1.forEach(word1 => {
        let word1Characters = getCharacterMap(word1), isUniversal = true;
        for (let index = 0; index < words2length && isUniversal; index++) {
            isUniversal = isSubset(word1Characters, characterMapsByWord2.get(words2[index]));
        }
        if (isUniversal) {
            universalWords.push(word1);
        }
    });

    return universalWords;
};

// Return true if subsetCandidate is a subset of source, otherwise false.
const isSubset = function(sourceCharacterCountsByCharacter, subsetCandidateCharacterCountByCharacter) {
    let isSubset = true;
    const subsetCandidateCharacters = [...subsetCandidateCharacterCountByCharacter.keys()], length = subsetCandidateCharacters.length;
    for (let index = 0; index < length && isSubset; index++) {
        let currentCandidateCharacter = subsetCandidateCharacters[index];
        isSubset = sourceCharacterCountsByCharacter.has(currentCandidateCharacter)
         && sourceCharacterCountsByCharacter.get(currentCandidateCharacter) >= subsetCandidateCharacterCountByCharacter.get(currentCandidateCharacter);
    }
    return isSubset;
}

const getCharacterMap = function(word) {
    let map = new Map();
    word.split('').forEach(character => {
        if (!map.has(character)) {
            map.set(character, 0);
        }
        map.set(character, map.get(character) + 1);
    });
    return map;
}

const words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"];
const result = wordSubsets(words1, words2);
console.log('!');