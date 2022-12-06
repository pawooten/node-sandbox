/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let steps = 0;
    if (num === 0) {
        return steps;
    }
    do {
        steps++;
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num--;
        }
    } while (num > 0);
    return steps;
};

const num = 8;
const result = numberOfSteps(num);
console.log('!');