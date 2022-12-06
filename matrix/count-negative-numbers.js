/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    // grid is an m x n matrix which is sorted in decreasing order both row-wise and column-wise, return the number of negative numbers in grid.

    // Since grid is sorted in decreasing order, all the negative values will float to the end of the matrix.
    // Determine the row and column indices of the first negative number.

    // Let's be naive.
    let count = 0;
    const n = grid.length, m = grid[0].length;
    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
        for (let columnIndex = 0; columnIndex < m; columnIndex++) {
            if (grid[rowIndex][columnIndex] < 0) {
                count++;
            }
        }
    }

    return count;
};

const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
const result = countNegatives(grid);
console.log('!');