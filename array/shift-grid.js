/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 var shiftGrid = function(grid, k) {
    // Shift the grid k times
    // In one shift operation, grid[i][j] moves to grid[i][j + 1], grid[i][n-1] moves to grid[i+1][0],


    // The last element in each row becomes the first element of the second row, 

    const m = grid.length;
    const n = grid[0].length;

    let tempGrid = grid.flat();
    while (k > 0) {
        // Shift the grid
        tempGrid = [tempGrid.pop(), ...tempGrid];
        k--;
    }

    // Copy tempGrid back into the real grid
    let row = 0, column = 0;
    tempGrid.forEach(gridValue => {
        grid[row][column] = gridValue;
        column++;
        if (column === n) {
            column = 0;
            row++;
        }
    });
    return grid;
};
const grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4;
const result = shiftGrid(grid, k);
console.log('!');