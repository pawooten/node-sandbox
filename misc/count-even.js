/**
 * @param {number} num
 * @return {number}
 */
 var countEven = function(num) {
    // Return the number of positive integers less than or equal to num whose digits sums are even.
    let count = 0;
    for (let candidateNum = 2; candidateNum <= num; candidateNum++) {
        if (getDigitSum(candidateNum) % 2 === 0) {
            count++;
        }
    }
    return count;
};

const getDigitSum = function(num) {
    return num.toString().split('').map(digitChar => +digitChar).reduce((previous, current) => previous + current, 0);
}

const num = 4;
const result = countEven(num);
console.log('!');