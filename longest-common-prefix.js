/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {    
    var maxLength = 0; // find the max length string in the array
    strs.forEach(str => {
        maxLength = (str.length > maxLength) ? str.length: maxLength;
    });
    for (let i = 1; i < maxLength; i++) {
        var map = buildPrefixMap(strs, i);
        var max = getMaxArray(map);
    }
};
var getMaxArray = function(map) {
    var max = null;
    Object.getOwnPropertyNames(map).forEach(key => {
        var array = map[key];
        max = (max && max.length > array.length) ? max : array;
    });
    return max;
}
var buildPrefixMap = function(strs, prefixLength) {
    var map = {};
    strs.forEach(str => {
        const prefix = str.substring(0, prefixLength);
        var prefixedWords = map[prefix] || [];
        prefixedWords.push(str);
        map[prefix] = prefixedWords;
    });
    return map;
}

console.log(longestCommonPrefix(['Paul', 'Pauline', 'Pedro', 'Emily', 'Emilio', 'Emmet']));