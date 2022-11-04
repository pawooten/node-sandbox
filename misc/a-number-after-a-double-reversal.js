/**
 * @param {number} num
 * @return {boolean}
 */
 var isSameAfterReversals = function(num) {

    const reverse = (n) => parseInt(n.toString().split('').reverse().join(''), 10);
    // Reverse num

    return reverse(reverse(num)) === num;
};


const num = 1800;
const result = isSameAfterReversals(num);
console.log('!');