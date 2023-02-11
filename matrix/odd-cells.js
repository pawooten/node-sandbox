/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    // Create the initialized matrix.
    const matrix = [];
    for (let count = 0; count < m; count++) {
        matrix.push(new Array(n).fill(0));
    }

    // Iterate over each index
    let rowIndex, columnIndex;
    for (const index of indices) {
        [rowIndex, columnIndex] = index;
        for (let cIndex = 0; cIndex < n; cIndex++) {
            matrix[rowIndex][cIndex] += 1;
        }
        for (let rIndex = 0; rIndex < m; rIndex++) {
            matrix[rIndex][columnIndex] += 1;
        }
    }
    
    let oddCount = 0;
    for (const row of matrix) {
        for (const cell of row) {
            if (cell % 2 === 1) {
                oddCount++;
            }
        }
    }
    return oddCount;
};

const m = 2, n = 2, indices = [[1,1],[0,0]];
const result = oddCells(m, n, indices);
console.log('!');