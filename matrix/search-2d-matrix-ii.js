/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    // Integers in each row of the matrix are sorted in ascending order left to right.
    // Integers in each column of the matrix are sorted in ascending order top to bottom.

    // Return true if the matrix contins the value, otherwise false.
    const m = matrix.length;
    let columnIndex, columnFound = false;

    // Iterate across each column of the matrix, examining the first value in each column.
    // Identify a column whose first value >= target and for which the first value of the following column <= target.
    // Iterate to the second-to-last column, since we're looking ahead.
    for (columnIndex = 0 ; columnIndex < m - 1 && !columnFound; columnIndex++) {
        let currentTopValue = matrix[0][columnIndex];
        let nextTopValue = matrix[0][columnIndex + 1];
        if (currentTopValue === target || nextTopValue === target) {
            // Lucky! short circuit because the target happpened to be find while examining the top value of each column.
            return true;
        }
        columnFound = target > currentTopValue && target < nextTopValue;
    }
    columnIndex--;
    if (columnIndex < 0) {
        columnIndex = 0;
    }
    // Iterating one column at a time may be too slow.

    const n = matrix[columnIndex].length;

    for (let index = 0; index < n; index++) {
        let currentValue = matrix[index][columnIndex];
        if (currentValue === target) {
            return true;
        }
    }

    return false;
};
const matrix = [[-5]], target = -2;
const result = searchMatrix(matrix, target);
console.log('!');