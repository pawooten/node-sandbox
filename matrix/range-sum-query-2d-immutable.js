/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    this.matrix = matrix;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    // Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1)
    // and lower right corner (row2, col2)

    let sum = 0;
    for (let currentRow = row1; currentRow <= row2; currentRow++) {
        for (let currentCol = col1; currentCol <= col2; currentCol++) {
            sum += this.matrix[currentRow][currentCol];
        }
    }
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

var obj = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
var result = obj.sumRegion(2,1,4,3);
console.log('!');