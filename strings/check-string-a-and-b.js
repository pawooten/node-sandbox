/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let lastAIndex = undefined, firstBIndex = undefined;
    const length = s.length;
    for (let index = 0; index < length; index++) {
        if (s.charAt(index) === 'a') {
            lastAIndex = index;
            if (firstBIndex !== undefined) {
                return false;
            }
        } else {
            if (firstBIndex === undefined) {
                firstBIndex = index;
            }
        }
    }
    if (lastAIndex === undefined || firstBIndex === undefined) {
        // The string is entirely As or entirely Bs
        return true;
    }
    return lastAIndex < firstBIndex;
};

const s = "bbb";
const result = checkString(s);
console.log('!');