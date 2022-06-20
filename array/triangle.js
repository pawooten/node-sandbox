/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
     // Return the minimum path sub from top to bottom. For each step, you may move to either index i or index i + 1 on the next row.
     
    // Recursively determine the set of paths from top to bottom, and score each one. Return the lowest score.

    let recordKeeper = { minimumPath: null };
    findPath(triangle, triangle.length - 1, 0, 0, 0, recordKeeper);
    return recordKeeper.minimumPath;
};

const findPath = function(triangle, lastRowIndex, currentPathCost, rowIndex, columnIndex, recordKeeper) {
    // Add the cost of our current location to the sum of the path cost.
    currentPathCost += triangle[rowIndex][columnIndex];

    // Have we reached the last row of the triangle?
    if ( rowIndex === lastRowIndex ) {
        // We've reached the last row of the triangle.
        if (recordKeeper.minimumPath == null) {
            recordKeeper.minimumPath = currentPathCost;
        }
        recordKeeper.minimumPath = Math.min(recordKeeper.minimumPath, currentPathCost);
        return;
    }

    // We have not reached the last row, continue exploring.
    findPath(triangle, lastRowIndex, currentPathCost, rowIndex + 1, columnIndex, recordKeeper);
    findPath(triangle, lastRowIndex, currentPathCost, rowIndex + 1, columnIndex + 1, recordKeeper);
}

const triangle = [[-1],[2,3],[1,-1,-1]];
const result =minimumTotal(triangle);
console.log('!');