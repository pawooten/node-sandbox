/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

     // Find the sortest word in the array. If there is a common prefix,
     // it's length cannot exceed the length of the shortest word.
     const length = strs.length;
     const shortestWord = strs.sort((left, right) => left.length - right.length)[0], shortestWordLength = shortestWord.length;
     let prefixLength = 1, prefix = undefined;
     while (prefixLength <= shortestWordLength) {
         prefix = shortestWord.slice(0, prefixLength);
         // Don't bother comparing to the first word in strs, since it should be shortestWord
         for (let index = 1; index < length; index++) {
             if (strs[index].slice(0, prefixLength) != prefix) {
                 // This prefix isn't common to all words, because it doesn't match this word
                 return prefix.slice(0, prefixLength - 1);                 
             }
         }
         prefixLength++;
     }
     if (!prefix) {
         prefix = "";
     }
     return prefix;
};

const  strs = [""];
const result = longestCommonPrefix(strs);
console.log('!');