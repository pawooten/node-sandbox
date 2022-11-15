/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    return parseInt(num.toString(2).split('').map(digit => {
        if (digit === '1') {
            return '0';
        } else {
            return '1';
        }
    }).join(''), 2);
};
const num = 5;
const result = findComplement(num);
console.log('!');
