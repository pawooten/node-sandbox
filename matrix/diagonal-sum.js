/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {

    // Do we need to worry about double counting the middle cell? Hopefully no.
    const length = mat.length;
    let middle = undefined;
    if (length % 2 === 1) {
        // We do.
        middle = Math.floor(mat.length / 2);
    }
    let sum = 0;
    for (let index = 0; index < length; index++) {
        sum += mat[index][index];
        sum += mat[index][length - index - 1];
    }
    if (middle !== undefined) {
        sum -= mat[middle][middle];
    }
    return sum;
};

const mat = [[1,1,1,1],
[1,1,1,1],
[1,1,1,1],
[1,1,1,1]]
const result = diagonalSum(mat);
console.log('!');