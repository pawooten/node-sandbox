/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // Given two strings s and t, return true if t is an anagram of s and false otherwise.
    const length = s.length;
     if (length != t.length) {
         return false;
     }

     const sSorted = s.split('').sort();
     const tSorted = t.split('').sort();
     for (let index = 0; index < length; index++) {
         if (sSorted[index] != tSorted[index]) {
             return false;
         }
     }
     return true;
};
const s = "rat", t = "car";
const result = isAnagram(s, t);
console.log('!');