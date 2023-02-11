/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const even = [], odd = [], result = [];
    for (const num of nums) {
        if (num % 2) {
            odd.push(num);
        } else {
            even.push(num);
        }
    }

    while (odd.length > 0 || even.length > 0) {
        result.push(even.pop(), odd.pop());
    }
    return result;
};

const nums = [4,2,5,7];
const result = sortArrayByParityII(nums);
console.log('!');