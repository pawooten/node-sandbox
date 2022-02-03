/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    return haystack.indexOf(needle);
};
const haystack = "hello", needle = "ll";
const result = strStr(haystack, needle);
console.log('!');