/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(matrix) {
    // A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
    // Return trun if matrix is a Toeplitz matrix, otherwise false.
    if (matrix[0].length === 1) {
        return true;
    }

    const rowLength = matrix.length, columnLength = matrix[0].length;
    // Iterate over each row of the matrix, starting with the second to last row.
    for (let rowIndex = rowLength - 2; rowIndex >= 0; rowIndex--) {
        // Iterate across each value in this row of the matrix (except the last one), making sure it matches the value of index + 1 in the next row.
        for (let columnIndex = 0; columnIndex < columnLength - 1; columnIndex++) {
            if (matrix[rowIndex][columnIndex] !== matrix[rowIndex + 1][columnIndex + 1]) {
                return false;
            }
        }
    }
    return true;
};


const matrix = [[11,74,0,93],[40,11,74,7]];
const result = isToeplitzMatrix(matrix);
console.log('!');
