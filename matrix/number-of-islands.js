/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    // In order to count the number of islands in the grid, we must iterate over each cell of the grid.
    // Each cell of the grid which is land must be evaluated to determine if it is part of a newly discovered island, or is
    // part of a known island.

    let islands = [], island, islandFound;

    const m = grid.length, n = grid[0].length;
    for (let rowIndex = 0; rowIndex < m; rowIndex++) {
        for (let columnIndex = 0; columnIndex < n; columnIndex++) {
            if (grid[rowIndex][columnIndex] === '1') {

                // This cell is composed of land. Is it part of a known island or a new one?
                let island = new Set();
                findIsland(grid, island, rowIndex, columnIndex);
                islands.push(island);
            }
        }
    }

    return islands.length;
};

const formatKey = (rowIndex, columnIndex) => `${rowIndex}.${columnIndex}`;

const findIsland = function(grid, island, rowIndex, columnIndex) {
    if (grid[rowIndex][columnIndex] === '1') {
        // "erase" this cell, so we don't count it again.
        grid[rowIndex][columnIndex] = '0';
        island.add(formatKey(rowIndex, columnIndex));
        if (rowIndex - 1 >= 0) {
            findIsland(grid, island, rowIndex - 1, columnIndex);
        }
        if (rowIndex + 1 < grid.length) {
            findIsland(grid, island, rowIndex + 1, columnIndex);
        }
        if (columnIndex - 1 >= 0) {
            findIsland(grid, island, rowIndex, columnIndex - 1);
        }
        if (columnIndex + 1 < grid[0].length) {
            findIsland(grid, island, rowIndex, columnIndex + 1);
        }
    }
}

const grid = [["1","1","1"],["0","1","0"],["1","1","1"]];

  const result = numIslands(grid);
  console.log('!');