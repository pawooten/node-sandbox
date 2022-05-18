/**
 * @param {number[]} nums
 * @return {number}
 */
 var deleteAndEarn = function(nums) {
     // Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] = 1 and every element equal to nums[i] + 1
    // return the maximum number of points you can earn by applying the above operation some number of times.

    let paths = [], currentPath = []; // each object will be an array of integer values which were removed.
    deleteAndEarInternal(nums, currentPath, paths);

    // The score of each path in paths is the sum of each value. Return the highest score
    return Math.max(...paths.map(path => path.reduce((previous, next) => previous + next)));
};
var deleteAndEarInternal = function(nums, currentPath, paths) {
    for (let index = 0; index < nums.length; index++) {
        // Copy the current value to be passed into currentPath arguments for recursive calls.
        let currentValue = nums[index];
        let newNums = removeForDeleteAndEarn(nums, index);
        if (newNums.length > 0) {
            // Elements remain to be removed, so continue.
            deleteAndEarInternal(newNums, [...currentPath, currentValue], paths);
        } else {
            // the list is now empty, add the currentPath to paths and we're done.
            paths.push([...currentPath, currentValue]);
        }
    }
}
const removeForDeleteAndEarn = function(nums, index) {
    let newNums = [...nums];
    const value = newNums.splice(index, 1)[0];
    const valueMinus = value - 1;
    const valuePlus = value + 1;

    return newNums.filter(num => num != valueMinus && num != valuePlus);
}
const nums = [8,3,4,7,6,6,9,2,5,8,2,4,9,5,9,1,5,7,1,4];
const result = deleteAndEarn(nums);
console.log('!');