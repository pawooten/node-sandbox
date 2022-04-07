/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    nums.sort((left, right) => left - right);
    let misses = [], current = 1, previous, doublesVisited = 0;
    const length = nums.length;
    for (let index = 0; index < length; index++) {
        if (index > 0 && previous === nums[index]) {
            doublesVisited++;
            continue;
        }
        if (nums[index] > current) {
            misses.push(current);
        }
        previous = nums[index];
        current++;
    }
    // How far away is current from length?
    while (doublesVisited != misses.length) {
        misses.push(current);
        current++;
    }
    return misses;
};
const nums = [1,1,2,2];
const result = findDisappearedNumbers(nums);
console.log('!');