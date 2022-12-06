/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    const characters = n.toString().split('').map(char => +char);
    return characters.reduce((previous, current) => previous * current) - characters.reduce((previous, current) => previous + current);
};
const n = 234;
const result = subtractProductAndSum(n);
console.log('!');