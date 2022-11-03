/**
 * @param {number[][]} grid
 * @return {number[]}
 */
 var findBall = function(grid) {
    // grid is an m x n array in which n balls will be dropped.

    const keeper = { grid: grid, results: [], m: grid.length, n: grid[0].length };
    for (let columnIndex = 0; columnIndex < keeper.n; columnIndex++) {
        walkGrid(0, columnIndex, keeper);
    }
    return keeper.results;
};

const walkGrid = (currentRow, currentColumn, keeper) => {
    if (currentColumn < 0 || currentColumn >= keeper.n) {
        keeper.results.push(-1);
        return;
    }
    if (currentRow === keeper.m) {
        // The current cell is in the bottom row of the grid, and the ball is about to fall out
        keeper.results.push(currentColumn);
        return;
    }

    if (keeper.grid[currentRow][currentColumn] === 1) {
        // This cell redirects the ball to the right.
        if (keeper.grid[currentRow][currentColumn + 1] === -1) {
            // We've reached a V.
            keeper.results.push(-1);
        } else {
            // We have not reached a V, continue walking the grid.
            walkGrid(currentRow + 1, currentColumn + 1, keeper);
        }
    } else {
        // This cell redirects the ball to the left.
        if (keeper.grid[currentRow][currentColumn - 1] === 1) {
            // We've reached a V.
            keeper.results.push(-1);
        } else {
            // We have not reached a V, continue walking the grid.
            walkGrid(currentRow + 1, currentColumn - 1, keeper);
        }
    }
}

const grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]];
const result = findBall(grid);
console.log('!');