/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
    // A clear path in a binary matrix is a path from the top-left (0,0) cell to the bottom-right cell (n-1, n-1)...
    const target = grid.length - 1, gridMap = new Map([ [ "0.0", true]]);
    let row = 0, column = 0;
    let completePaths = [];
    findTarget(grid, gridMap, [ [0,0] ], target, completePaths);

    if (completePaths.length > 0) {
        completePaths.sort((previous, current) => previous.length - current.length);
        return completePaths[0].length;
    }
    return -1;
}
const directionOffsets = [
    [ 1, 1], // South-East
    [ 1, 0], // South
    [ 1,-1], // South-West
    [ 0, 1], // East
    [ 0,-1], // West
    [-1, 1], // North-East
    [-1,-1], // North-West
    [-1, 0], // North
];

const findTarget = function(grid, gridMap, path, target, completePaths) {
    let newRow, newColumn, [row, column] = path.slice(-1)[0];
    if (row === target && column === target) {
        // We've reached the target!
        completePaths.push(path);
        return;
    }

    for (let index = 0; index < directionOffsets.length; index++) {
        let rowOffset, columnOffset;
        [rowOffset, columnOffset] = directionOffsets[index];
        newRow = row + rowOffset;
        newColumn = column + columnOffset;
        let newKey = `${newRow}.${newColumn}`;
        if (newRow <= target && newColumn <= target && newRow >= 0 && newColumn >= 0 && !grid[newRow][newColumn] && !gridMap.get(newKey)) {
            // South is in bounds and is zero, so move there
            gridMap.set(newKey, true);
            findTarget(grid, gridMap, [...path, [newRow, newColumn]], target, completePaths);
        }
    }
}

const grid = [[1,0,0],[1,1,0],[1,1,0]];
const result = shortestPathBinaryMatrix(grid);
console.log('!');