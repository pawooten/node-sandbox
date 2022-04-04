/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    // Replace every element in the array with the grest element among the elements to its right
    const length = arr.length;
    for (let index = 0; index < length; index++) {
        arr[index] = Math.max(-1, ...arr.filter((num, numIndex) => numIndex > index));
    }
    return arr;
};
const arr = [17,18,5,4,6,1];
const result = replaceElements(arr);
console.log('!');