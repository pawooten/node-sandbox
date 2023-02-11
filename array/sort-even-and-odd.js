/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    const even = [], odd = [], result = [], length = nums.length;
    for (let index = 0; index < length; index++) {
        if (index % 2) {
            odd.push(nums[index]);
        } else {
            even.push(nums[index]);
        }
    }
   
    even.sort((left, right) => left - right);
    odd.sort((left, right) => right - left);

    let value;
    while (even.length > 0 || odd.length > 0) {
        value = even.shift();
        result.push(even.shift(), odd.shift());
    }
    return [...result.filter(value => value !== undefined)];
};

const nums = [4,1,2,3];
const result = sortEvenOdd(nums);
console.log('!');