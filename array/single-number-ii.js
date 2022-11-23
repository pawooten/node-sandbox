/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const singletons = new Set(), nonSingletons = new Set();
    for (const num of nums) {
        if (!singletons.has(num) && !nonSingletons.has(num)) {
            singletons.add(num);
        } else {
            singletons.delete(num);
            nonSingletons.add(num);
        }
    }
    return [...singletons][0];
};

const nums = [2,2,3,2];
const result = singleNumber(nums);
console.log('!');