/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var longestIncreasingPath = function(matrix) {
    let recordKeeper = { longestPath: 0, visitedCells: new Map() };
    const rowLength = matrix.length - 1, columnLength = matrix[0].length - 1;
    const findPath = function(matrix, rowLength, columnLength, currentPath, recordKeeper) {
        const inBounds = function(rowLength, columnLength, location) {
            let row, column;
            [row, column] = location;
            if (row < 0 || row > rowLength) {
                return false; // row out of bounds
            }
            if (column < 0 || column > columnLength) {
                return false;
            }
            return true;
        };
        
        const isIncreasing = function(matrix, currentLocationValue, newLocation) {
            let newLocationValue = matrix[newLocation[0]][newLocation[1]];
            return currentLocationValue < newLocationValue;
        };
        let currentLocation = currentPath[currentPath.length - 1];
        let currentValue = matrix[currentLocation[0]][currentLocation[1]];
        // Move north?
        let newLocation = [...currentLocation];
        newLocation[0]--;
        if (inBounds(rowLength, columnLength, newLocation) && isIncreasing(matrix, currentValue, newLocation)) {
            // We've found a next step for this path! Explore it
            findPath(matrix, rowLength, columnLength, [...currentPath, newLocation], recordKeeper);
        }
        // Move south?
        newLocation[0] += 2;
        if (inBounds(rowLength, columnLength, newLocation) && isIncreasing(matrix, currentValue, newLocation)) {
            // We've found a next step for this path! Explore it
            findPath(matrix, rowLength, columnLength, [...currentPath, newLocation], recordKeeper);
        }
        // Move east?
        newLocation[0]--; // Reset
        newLocation[1]++;
        if (inBounds(rowLength, columnLength, newLocation) && isIncreasing(matrix, currentValue, newLocation)) {
            // We've found a next step for this path! Explore it
            findPath(matrix, rowLength, columnLength, [...currentPath, newLocation], recordKeeper);
        }
        // Move west?
        newLocation[1] -= 2;
        if (inBounds(rowLength, columnLength, newLocation) && isIncreasing(matrix, currentValue, newLocation)) {
            // We've found a next step for this path! Explore it
            findPath(matrix, rowLength, columnLength, [...currentPath, newLocation], recordKeeper);
        }
        // Is the length of our current path longer than the record?
        recordKeeper.longestPath = Math.max(recordKeeper.longestPath, currentPath.length);

        // Any path starting from a cell we've traversed along the current path cannot be longer that the current cell,
        // other than the first cell.
        let length = currentPath.length;
        for (let index = 1; index < length; index++) {
            let pathCell = currentPath[index];
            recordKeeper.visitedCells.set(`${pathCell[0]}.${pathCell[1]}`, true);
        }
    };
    // Explore paths originating from each cell of the matrix that hasn't been traversed as part of an already-explored path.
    matrix.forEach((matrixRow, rowIndex) => {
        matrixRow.forEach((_, cellIndex) => {
            if (!recordKeeper.visitedCells.has(`${rowIndex}.${cellIndex}`)) {
                findPath(matrix, rowLength, columnLength, [ [rowIndex, cellIndex]], recordKeeper);
            }
        });
    });
    return recordKeeper.longestPath;
};

const matrix = [[9,9,4],[6,6,8],[2,1,1]];
const result = longestIncreasingPath(matrix);
console.log('!');