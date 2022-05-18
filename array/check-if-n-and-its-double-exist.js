/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    const length = arr.length; 
    for (let index = 0; index < length; index++) {
        // Are any of the other values in the array the double of this value?
        let searchValue = arr[index] * 2;
        if (matches(arr, searchValue, index)) {
            return true;
        }
    }
    // None of the indices had a double
    return false;
};
const matches = (arr, searchValue, index) => {
    return arr.some((num, searchIndex) => num === searchValue && index != searchIndex);
}
const arr = [-2,0,10,-19,4,6,-8];
const result = checkIfExist(arr);
console.log('!');