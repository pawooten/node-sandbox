/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
    const singletons = new Set();
    for (const num of nums) {
        if (!singletons.has(num)) {
            singletons.add(num);
        } else {
            singletons.delete(num);
        }
    }
    return [...singletons];
};

const nums = [1,2,1,3,2,5];
const result = singleNumber(nums);
console.log('!');