/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
    // All values in nums are greater than one, which means there are no negative values. Since there are no negative values, 
    // filter out any value greater than the target, since there is no way to decrement an sum that overshoots the target.
    nums = nums.filter(num => num <= target);

    // Let's be naive, and explore all combinations without optimizing.
    let combinations = [];

    nums.forEach(num => {
        // Can we reach the target with a combination that includes one or more instances of this number?
        if (target % num === 0) {
            // Target is evenly divisible by num!
            let multiplier = target / num;
            combinations.push(Array(multiplier).fill(num));
        } else {
            // Target is not evenly divisible by num.
        }
    });
};
const nums = [1,2,3], target = 4;
const result = combinationSum4(nums, target);
console.log('!');