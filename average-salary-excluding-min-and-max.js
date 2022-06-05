/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    salary.sort((left, right) => left - right);
    salary.shift();
    salary.pop();
    let count = salary.length;
    let sum = salary.reduce((previous, current) => previous + current);
    return sum / count;
};
const salary = [4000,3000,1000,2000];
const result = average(salary);
console.log('!');