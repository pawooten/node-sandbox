/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
     const length = arr.length;
    for (let index = 0; index < length; index++) {
        if (arr[index] === 0) {
            // Shift remaining characters to accommodate the zero we are inserting
            for (let subIndex = arr.length - 1; subIndex > index; subIndex--) {
                arr[subIndex] = arr[subIndex - 1];
            }
            if (index + 1 < length) {
                arr[index + 1] = 0;
                index++;
            }
        }
    }

    //  const length = arr.length;
    //  [arr] = arr.flatMap(num => {
    //      if (!num) {
    //          return [0, 0];
    //      }
    //      return num;
    //  }).splice(0, length);
};
const arr = [1,0,2,3,0,4,5,0];
const result = duplicateZeros(arr);
console.log('!');