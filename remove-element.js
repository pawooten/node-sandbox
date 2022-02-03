/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    // remove all occurences of val from nums in-place.
    let index = nums.indexOf(val);
    if (index === 0 && nums.length === 1) {
        nums.pop();
        return 0;
    }
    while (index > -1) {
        // replace this match of val with the last element of the array and remove the last element of the array
        let replacementValue;
        do {
            replacementValue = nums.pop();
        } while (replacementValue === val);
        if (replacementValue !== undefined) {
            nums[index] = replacementValue;
        }
        index = nums.indexOf(val);
    }
    return nums.length;
};
const nums = [4,5], val = 5;
const result = removeElement(nums, val);
console.log('!');