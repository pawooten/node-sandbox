/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const rowCount = grid.length, columnCount = grid[0].length;
    let rowIndex = 0;
    const scores = new Array(rowCount);
    for (; rowIndex < rowCount; rowIndex++) {
        scores.push(new Array(columnCount).fill(undefined));
    }

    // Iterate over each cell in the grid
    for (rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            if (grid[rowIndex][columnIndex] === 1) {
                // We've found a land cell
                scores[rowIndex][columnIndex] = -1;
            }
        }
    }
};

const grid = [[1,0,1],[0,0,0],[1,0,1]];
const result = maxDistance(grid);
console.log('!');