/**
 * @param {number[]} nums
 * @return {number}
 */
//  var removeDuplicates = function(nums) {
//     var map = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (map[nums[i]]) {
//             // We've already encountered this value, so it should be excluded
//             // remove the duplicate and continue processing.
//             nums.splice(i, 1);
//             i -= 1;
//             continue;
//         }
//         map[nums[i]] = true;
//     }
//     return nums.length;
// };
var removeDuplicates = function(nums) {
    // Start on the second number in the array, since the first is guaranteed not to be a duplicate (since its the only number in the array)    
    for (let i = 1; i < nums.length; i++) {
        if ( nums[i] === nums[i-1] ) {
            // We've already encountered this value, so it should be excluded
            // remove the duplicate and continue processing.
            nums.splice(i, 1);
            i -= 1;
            continue;
        }
    }
    return nums.length;
};
const result = removeDuplicates([1,1,2]);
console.log('!');