/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    if (num === 1) {
        return true;
    }
    
    const half = Math.floor(num / 2);
    let squared;
    for (let counter = 2; counter <= half; counter++) {
        squared = Math.pow(counter, 2);
        if (num === squared) {
            return true;
        }
        if (squared > num) {
            return false;
        }
    }
    return false;
};

const num = 14;
const result = isPerfectSquare(num);
console.log('!');