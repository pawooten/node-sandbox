/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    // grid[i][j] === 1 represents land, 0 represents water.
    // Grid cells are connected horizontally and vertically, not diagonally.

    // Let's be naive and iterate cell by cell across each row of the grid.
    let edgeCounts = 0;
    const rowCount = grid.length, columnCount = grid[0].length;
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            if (grid[rowIndex][columnIndex] === 1) {
                // This cell is land.

                // Does a cell to the north exist? If so, is it water?
                if (rowIndex === 0 || grid[rowIndex - 1][columnIndex] === 0) {
                    // The current cell is land and the cell to the north is water, this means we've found a water edge.
                    edgeCounts++;
                }
                
                // Does a cell to the south exist? If so, is it water?
                if (rowIndex === rowCount - 1 || grid[rowIndex + 1][columnIndex] === 0) {
                    // The current cell is land and the cell to the north is water, this means we've found a water edge.
                    edgeCounts++;
                }
                // Does a cell to the west exist? If so, is it water?
                if (columnIndex === 0 || grid[rowIndex][columnIndex - 1] === 0) {
                    // The current cell is land and the cell to the west is water, this means we've found a water edge.
                    edgeCounts++;
                }
                // Does a cell to the east exist? If so, is it water?
                if (columnIndex === columnCount - 1 || grid[rowIndex][columnIndex + 1] === 0) {
                    // The current cell is land and the cell to the east is water, this means we've found a water edge.
                    edgeCounts++;
                }
            }
        }
    }
    return edgeCounts;
};

const grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];
const result = islandPerimeter(grid);
console.log('!');