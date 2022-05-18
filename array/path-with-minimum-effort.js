/**
 * @param {number[][]} heights
 * @return {number}
 */
 var minimumEffortPath = function(heights) {
    // The hiker begins at 0,0 and must traverse to row-1, col-1 by moving up, down, left and right.

    // Determine all paths the hiker can take from the origin to the destination. Determine the effort score of each path and return the path with the smallest effort
    let visitedCells = new Map();
    let paths = [], currentPath = [];
    walkPath(0, 0, heights, visitedCells, currentPath, paths);
    let bestPathEffort = 0;
    return Math.min(...paths.map(path => {
        bestPathEffort = Math.max(bestPathEffort, scorePath(path, heights));
    }));
};
const walkPath = function(currentRow, currentColumn, heights, visitedCells, currentPath, paths) {
    // Out of bounds?
    if (currentRow > heights.length || currentColumn > heights[0].length) {
        return;
    }

    // Have we reached the destination?
    if (currentRow === heights.length && currentColumn === heights[0].length) {
        // Yes!
        paths.push(currentPath);
        return;
    }

    currentPath.push({row: currentRow, col: currentColumn });
    const key = getVisitedCellMapKey(currentRow, currentColumn);
    visitedCells.set(key, true);

    if (currentRow > 0) {
        if (!visitedCells.has(getVisitedCellMapKey(currentRow - 1, currentColumn))) {
            // The cell north of here is in bounds and hasn't already been visited, so visit it.
            walkPath(currentRow - 1, currentColumn, heights, visitedCells, currentPath, paths);
        }
    }
    // south
    walkPath(currentRow + 1, currentColumn, heights, visitedCells, currentPath, paths);

    if (currentColumn > 0) {
        if (!visitedCells.has(getVisitedCellMapKey(currentRow, currentColumn - 1))) {
            // The cell east of here is in bounds and hasn't already been visited, so visit it.
            walkPath(currentRow, currentColumn - 1, heights, visitedCells, currentPath, paths);
        }
    }
    // west
    walkPath(currentRow, currentColumn + 1, heights, visitedCells, currentPath, paths);
}
const getVisitedCellMapKey = (currentRow, currentColumn) => `${currentRow}_${currentColumn}`;
const scorePath = function(path, heights) {
    let effort = 0;
    const length = path.length;
    for (let index = 1; index < path.length; index++) {
        let currentCell = path[index], previousPathCell = path[index - 1];
        let previousHeight = heights[previousPathCell.row][previousPathCell.col];
        let currentHeight = heights[currentCell.row][currentCell.col];
        effort = Math.max(effort, Math.abs(previousHeight - currentHeight));
    }
    return effort;
}
const heights = [[1,2,2],[3,8,2],[5,3,5]];
const result = minimumEffortPath(heights);
console.log('!');