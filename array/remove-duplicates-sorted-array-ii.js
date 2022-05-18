/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // nums is an integer array sorted in non-decreasing order. Remove duplicates in place such that each unique
    // element appears at most twice. 

    // let map = {};
    // nums.forEach((num, index) => {
    //     let indices = map[num] || [];
    //     indices.push(index);
    //     map[num] = indices;
    // });

    // // Any list of indices contained within the map whose count > 2 contains duplicates which must be removed

    // return nums;

    let index = 0;
    while (index < nums.length  - 1) {
        let numValue = nums[index];
        let secondIndex = nums.indexOf(numValue, index + 1);

        if (secondIndex === -1) {
            // This value is a singleton within the nums array, so no duplicates to remove.
            index++;
            continue;
        }
        // We have a second index of this numValue. Remove any additional instances, since the array can contain at most two of the same value
        let duplicateIndex = nums.indexOf(numValue, secondIndex + 1);
        while (duplicateIndex !== -1) {
            nums.splice(duplicateIndex, 1);
            duplicateIndex = nums.indexOf(numValue, secondIndex + 1);
        }
        index++;
    }
    return nums.length;
};
const nums = [0,0,1,1,1,1,2,3,3];
const result = removeDuplicates(nums);
console.log('!');