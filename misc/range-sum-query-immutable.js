/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    // return this.nums.slice(left, right + 1).reduce((previous, current) => previous + current, 0);
    let sum = 0;
    while (left <= right) {
        sum += this.nums[left];
        left++;
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

let myNumArray = new NumArray([-2, 0, 3, -5, 2, -1]);
let result = myNumArray.sumRange(0, 2);
result = myNumArray.sumRange(2, 5);
result = myNumArray.sumRange(0, 5);
console.log('!');