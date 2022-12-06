/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {
    return s.split(' ').filter(word => word.length > 0).length;
};

const s = "Hello, my name is John";
const result = countSegments(s);
console.log('!');