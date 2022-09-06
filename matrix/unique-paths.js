/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    // Initialize grid to an m-length array of n-length arrays
    let grid = Array(m).fill(null).map(() => Array(n));
    let rowIndex, columnIndex;
    // Set the first value in row of the grid to 1, because there is only a single unique path which can be followed to reach each of these cells.
    // Only by traveling straight down from the origin can the robot reach these cells (because the robot cannot move left).
    for (rowIndex = 0; rowIndex < m; rowIndex++) {
        grid[rowIndex][0] = 1;
    }

    // Set the first value in each column of the grid to 1, because there is only a single unique path which can be followed to reach each of these cells.
    // Only by traveling straight right from the origin can the robot reach these cells (because the robot cannot move up).
    for (columnIndex = 0; columnIndex < n; columnIndex++) {
        grid[0][columnIndex] = 1;
    }

    // Skipping the first row & column, since their path counts are already known and cannot be calculated using look-back, iterate across the remaining cells of the grid 
    for (let rowIndex = 1; rowIndex < m; rowIndex++) {
        for (let columnIndex = 1; columnIndex < n; columnIndex++) {
            // The unique path count to reach any cell of the grid that is not in the first row or first column is the sum of the unique path counts of the 
            // adjacent cells from which that cell can be reached in a single step.
            grid[rowIndex][columnIndex] = grid[rowIndex - 1][columnIndex] + grid[rowIndex][columnIndex - 1];
        }
    }
    return grid[m - 1][n - 1];
};
const m = 3, n = 7;
const result = uniquePaths(m, n);
console.log('!');