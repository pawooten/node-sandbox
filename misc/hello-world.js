/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    console.log('longest common prefix');
    return longestCommonPrefix2(strs, '');
};

var longestCommonPrefix2 = function(strs, currentMaxPrefix ) {
    var map = {};
    var longestArray = ['', []];
    strs.forEach(str => {
        var prefix = str.substring(0, currentMaxPrefix.length + 1);
        var strArray = map[prefix] || [];
        strArray.push(str);
        map[prefix] = strArray;
        if (strArray.length > longestArray[1].length) {
            longestArray = [prefix, strArray];
        }
    });
    if (longestArray[1].length === 1) {
        // None of the arrays from this pass contain multiple words, so another common prefix isn't possible.
        return currentMaxPrefix;
    }
    else
    {
        var result = longestCommonPrefix2(longestArray[1], longestArray[0]);
        if (result.length > currentMaxPrefix.length) {
            return result;
        }
        return currentMaxPrefix;
    }
}

console.log('hello world');
longestCommonPrefix(['Paul', 'Pauline', 'Pedro', 'Emily', 'Emilio', 'Emmet']);