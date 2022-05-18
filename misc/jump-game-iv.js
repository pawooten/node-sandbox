/**
 * @param {number[]} arr
 * @return {number}
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
 var minJumps = function(arr) {
    let currentIndex = 0, currentPath = [], allPaths = [];
    findPaths(arr, currentIndex, currentPath, allPaths);
    return Math.min(...allPaths.map(path => path.length)) - 1;
};
 var findPaths = function(array, currentIndex, currentPath, allPaths) {
    // Each jump can increment the current index, decrement the current index
    // Or "jump" the current index to any index whose value equals the value of the current index

    // start at index = 0, determine the minimum number of steps to reach the last index of the array
    currentPath.push(currentIndex);
    if (currentIndex === array.length - 1) {
        // we've reached the last element of the array, add the currentPath to allPaths
        allPaths.push(currentPath);
        return;
    }

    // is the decrement step in bounds?
    if (currentIndex > 0) {
        // would decrementing be a loop to an index we've already visited on this path?
        if (!currentPath.includes(currentIndex - 1)) {
            //The decrement step is in bounds and will not result in a loop back to an already visited index, so explore it
            findPaths(array, currentIndex - 1, [...currentPath], allPaths);
        }
    }
    
    // The increment step is inbounds because we would have shortcircuited if we had already reached the last index
    // Would incrementing be a loop to an index we've already visited on this path?
    if (!currentPath.includes(currentIndex + 1)) {
        // The increment step must be inbounds and will not result in a loop back to an already visited index, so explore it
        findPaths(array, currentIndex + 1, [...currentPath], allPaths);
    }

    // Find all the indexes which are jumpable because they have the same value as the current index.
    const currentValue = array[currentIndex];
    let jumpableIndexes = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === currentValue) {
            jumpableIndexes.push(i);
        }
    }
    jumpableIndexes.forEach(jumpableIndex => {
        // loop?
        if (!currentPath.includes(jumpableIndex)) {
            findPaths(array, jumpableIndex, [...currentPath], allPaths);
        }
    });
};
arr = [7,6,9,6,9,6,9,7]
const result = minJumps(arr);
console.log('!');