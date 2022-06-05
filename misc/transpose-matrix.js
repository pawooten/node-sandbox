/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    // The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

    let newMatrix = [];
    // The ith row of the transposed matrix is composed of the ith value of each row of the original matrix.
    const length = matrix[0].length;
    for (let index = 0; index < length; index++) {
          newMatrix.push(matrix.map(row => row[index]));
    }
    return newMatrix;
};
const  matrix = [[1,2,3],[4,5,6],[7,8,9]];
const result = transpose(matrix);
console.log('!');