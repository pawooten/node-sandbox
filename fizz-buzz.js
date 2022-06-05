/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let result = [];
    for (let current = 1; current <= n; current++) {
        let divisbleByThree = current % 3 === 0;
        let divisibleByFive = current % 5 === 0;
        if (divisibleByFive && divisbleByThree) {
            result.push('FizzBuzz');
            continue;
        }
        if (divisbleByThree) {
            result.push('Fizz');
            continue;
        }
        if (divisibleByFive) {
            result.push('Buzz');
            continue;
        }
        result.push(`${current}`);
    }
    return result;
};
const n = 5;
const result = fizzBuzz(n);
console.log('!');