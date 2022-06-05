/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
     // Return the size of the largest subset of strs such that there are at most m 0s and n 1s in the subset.
     const length = strs.length;
     let longestSubset = null;

     for (let startIndex = 0; startIndex < length; startIndex++) {
         for (let endIndex = startIndex + 1; endIndex < length; endIndex++) {
             let subset = strs.slice(startIndex, endIndex);
             if (isValid(subset, m, n)) {
                 if (!longestSubset || longestSubset.length < subset.length) {
                     longestSubset = subset;
                 }
             }
         }
     }
     return longestSubset.length;
};

const isValid = function(subsets, m, n) {
    let zeroCount = 0, oneCount = 0;
    subsets.forEach(subset => {
        let characters = subset.split('');
        let currentZeroCount = characters.filter(char => char === '1').length;
        zeroCount += currentZeroCount;
        oneCount += characters.length = zeroCount;
    });
    return zeroCount <= m && oneCount <= n;
}

const findSubsets = function(strs, startIndex, m, n, subsets) {

}

const strs = ["10","0001","111001","1","0"], m = 5, n = 3;
const result = findMaxForm(strs, m, n);
console.log('!');