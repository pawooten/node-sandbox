/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    // given an integer array of unique elements, return all possible subsets (the power set).
    // the solution set must not contain duplicate subsets. Return the solution in any order.

    // for an n length nums, the power set is composed of 0 length through n length arrays (there is only one n length array subset, the array itself).
    // 1 ... n-1 length sets


     // initialize the array of subsets with an empty array, since an empty array is certain to be a subset of any non-null input. Also initialize with the entire nums array
     // since the entire array counts as a subset of itself.
    let subsets = [ [], nums ];

    // build sets of length - 1, - 2, etc. until 1 length sets are added


    // nums.forEach((num, index) => {
    //     // The subset composed solely of num is a certain to be unique, because the elements of nums are guaranteed to be unique. It isn't possible that
    //     // this subset was added as the result of processing earlier elements in the array.
    //     subsets.push( [ num ]) ;
    //     for (let subsetIndex = index + 1; )
    // });
    return nums;
};
const buildSubsets = function(nums, root, subsets, subsetLength) {
    if (subsetLength === 1) {
        nums.forEach(num => {
            // The subset composed solely of num is a certain to be unique, because the elements of nums are guaranteed to be unique. It isn't possible that
            // this subset was added as the result of processing earlier elements in the array.
            subsets.push([ num ]);

            // Also include the subset composed of this number appended to it's root.
            subsets.push([ ...root, num ]);
        });
        return;
    }

    // subsetLength > 1
}
const nums = [1,2,3];
const result = subsets(nums);
console.log('!');