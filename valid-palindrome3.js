/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
     const charCodeA = 'a'.charCodeAt(0);
     const charCodeZ = 'z'.charCodeAt(0);
     const charCode0 = '0'.charCodeAt(0);
     const charCode9 = '9'.charCodeAt(0);
    // A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characerewrs,
    // it reads the same forward and backward.
    let filteredS = [...s.split('')].map(char => char.toLowerCase()).filter(char => {
        let code = char.charCodeAt(0);
        return (code >= charCodeA && code <= charCodeZ) || (code >= charCode0 && code <= charCode9);
    });
    const reversedFilteredS = [...filteredS].reverse();
    const length = s.length;
    for (let index = 0; index < length; index++) {
        if (filteredS[index] != reversedFilteredS[index]) {
            return false;
        }
    }

    return true;
};
const s = "Race a car";
const result = isPalindrome(s);
console.log('!');