/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length, n = obstacleGrid[0].length, paths = [];
    if (m === 1 && n === 1) {
        return obstacleGrid[0][0];
    }
    findPaths(obstacleGrid, m, n, [[0,0]], paths);
    return paths.length;
};
const findPaths = function(obstacleGrid, m, n, currentPath, paths) {
    let currentRow, currentColumn;
    [currentRow, currentColumn] = currentPath[currentPath.length - 1];

    if (currentRow === m - 1 && currentColumn === n - 1) {
        // We've reached the target
        paths.push(currentPath);
    }

    // Move south?
    if (currentRow + 1 < m && !obstacleGrid[currentRow + 1][currentColumn]) {
        findPaths(obstacleGrid, m, n, [...currentPath, [currentRow + 1, currentColumn]], paths);
    }

    // Move east?
    if (currentColumn + 1 < n && !obstacleGrid[currentRow][currentColumn + 1]) {
        findPaths(obstacleGrid, m, n, [...currentPath, [currentRow, currentColumn + 1]], paths);
    }
}

const obstacleGrid = [[1]];
const result = uniquePathsWithObstacles(obstacleGrid);
console.log('!');