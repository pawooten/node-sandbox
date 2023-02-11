/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var minFallingPathSum = function(matrix) {
    const lastRowIndex = matrix.length - 1;
    if (lastRowIndex === 0) {
        return matrix[0][0];
    }
    let lowestSum = Number.MAX_SAFE_INTEGER;
    const walkPath = (rowIndex, columnIndex, currentSum) => {
        currentSum += matrix[rowIndex][columnIndex];
        // Have we reached the last row?
        if (rowIndex === lastRowIndex) {
            // We have. Have we set a new record?
            lowestSum = Math.min(lowestSum, currentSum);
            return;
        }
        // We have not reached the last row. Can we bend left as we fall without going out of bounds?
        rowIndex++;
        if (columnIndex > 0) {
            // We can.
            walkPath(rowIndex, columnIndex - 1, currentSum);
        }
        // Fall straight without bending.
        walkPath(rowIndex, columnIndex, currentSum);

        // Can we bend right as we fall without going out of bounds? Hack, exploit nxn matrix.
        if (columnIndex < lastRowIndex) {
            walkPath(rowIndex, columnIndex + 1, currentSum);
        }
    };

    let first, second;
    for (let index = 0; index < lastRowIndex; index += 2) {
        first = matrix[0][index], second = matrix[0][index + 1];
        if (first < second) {
            walkPath(0, index, 0);
        } else {
            walkPath(0, index + 1, 0);
        }
    }
    if (lastRowIndex % 2 === 0) {
        first = matrix[0][lastRowIndex], second = matrix[0][lastRowIndex - 1];
        if (first < second) {
            walkPath(0, lastRowIndex, 0);
        } else {
            walkPath(0, lastRowIndex - 1, 0);
        }
    }
    return lowestSum;
};

const matrix = [[-80,-13,22],[83,94,-5],[73,-48,61]];
const result = minFallingPathSum(matrix);
console.log('!');