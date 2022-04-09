/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.nums.sort((left, right) => left - right);
    return this.nums[this.nums.length - this.k]; // If k = 1, return the last element. 
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
 let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 let result = kthLargest.add(3);   // return 4
 result = kthLargest.add(5);   // return 5
 result = kthLargest.add(10);  // return 5
 result = kthLargest.add(9);   // return 8
 result = kthLargest.add(4);   // return 8
console.log('!');