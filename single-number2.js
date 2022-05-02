/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    nums.sort((left, right) => left - right);

    let result = null;
    while (!result) {
        if (nums[0] === nums[1]) {
            nums = nums.splice(2);
        } else {
            result = nums[0];
        }
        let length = nums.length;
        if (nums[length - 1] === nums[length - 2]) {
            nums.pop();
            nums.pop();
        }
    }
    return result;
};
const nums = [1,0,1];
const result = singleNumber(nums);
console.log('!');