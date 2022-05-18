/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
     // heights represents the current sort order of students.
     // generate a sorted list and count the number of students who are out of place
     
     const expected = [...heights].sort((left, right) => left - right);
     const length = heights.length;
     let count = 0;
     for (let index = 0; index < length; index++ ) {
         if (heights[index] != expected[index]) {
             count++;
         }
     }
     return count;
};
const heights = [5,1,2,3,4];
const result = heightChecker(heights);
console.log('!');