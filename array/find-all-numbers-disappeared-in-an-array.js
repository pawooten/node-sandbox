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
    while (current <= nums.length) {
        if (nums.indexOf(current) < 0) {
            misses.push(current);
        }
        current++;
    }
    return misses;
};
const nums = [10,2,5,10,9,1,1,4,3,7];
const result = findDisappearedNumbers(nums);
console.log('!');