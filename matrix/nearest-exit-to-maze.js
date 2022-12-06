/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
 var nearestExit = function(maze, entrance) {
    // Empty cells are '.'
    // Walls are '+'
    // entrance = [rowIndex, columnIndex], aka the starting point
    // An exit is any empty cell that is on the border of the maze, excluding the entrance.
    const emptyCell = '.', wallCell = '+', visitedCell = '~';
    const n = maze.length, m = maze[0].length, bottomRowIndex = n - 1, lastColumnIndex = m - 1;

    const getExits = () => {
        const exits = [];
    
        // Get the horizontal exits
        for (let columnIndex = 0; columnIndex < m; columnIndex++) {
            // Is this index on the top row of the grid an exit?
            if (maze[0][columnIndex] === emptyCell) {
                // We've found an empty cell, so this is an exit.
                exits.push([0, columnIndex]);
            }
            // Is this index on the bottom row of the grid an exit?
            if (maze[bottomRowIndex][columnIndex] === emptyCell) {
                // We've found an empty cell, so this is also an exit.
                exits.push([bottomRowIndex, columnIndex]);
            }
        }
        // Get the vertical exits. Skipping the first and last rows on both edges, since they were included when searching for horizontal exits
        for (let rowIndex = 1; rowIndex < bottomRowIndex; rowIndex++) {
            // Is this index of the left column of the grid an exit?
            if (maze[rowIndex][0] === emptyCell) {
                exits.push([rowIndex, 0]);
            }
            // Is this index of the right column of the grid an exit?
            if (maze[rowIndex][lastColumnIndex] === emptyCell) {
                exits.push([rowIndex, lastColumnIndex]);
            }
        }

        return exits.filter(exit => !(exit[0] === entrance[0] && exit[1] === entrance[1]));
    };
    
    bestPathLength = Number.MAX_SAFE_INTEGER;
    let currentPathLength, currentRowIndex, currentColumnIndex, exitRowIndex, exitColumnIndex, keepLooking;
    // Iterate over each exit, determining the best path from the entrance to that exit, if a path exists.
    for (const exit of getExits()) {
        currentPathLength = 0;
        [currentRowIndex, currentColumnIndex] = entrance;
        [exitRowIndex, exitColumnIndex] = exit;
        keepLooking = true;
        while (keepLooking) {
            if (currentRowIndex === exitRowIndex && currentColumnIndex === exitColumnIndex) {
                // We've reached the exit!
                bestPathLength = Math.min(bestPathLength, currentPathLength);
                keepLooking = false;
            }

            if (currentRowIndex < exitRowIndex && maze[currentRowIndex + 1][currentColumnIndex] === emptyCell) {
                // We need to increment the row index to reach this exit, and the cell immediately south of current
                // is empty, so let's move there.
                currentPathLength++;
                maze[currentRowIndex][currentColumnIndex] = visitedCell;
                currentRowIndex++;
                continue;
            }
            if (currentRowIndex > exitRowIndex && maze[currentRowIndex - 1][currentColumnIndex] === emptyCell) {
                // We need to decrement the row index to reach thsi exit, and the cell immediately north of current is empty,
                currentPathLength++;
                maze[currentRowIndex][currentColumnIndex] = visitedCell;
                currentRowIndex--;
                continue;
            }
            if (currentColumnIndex < exitColumnIndex && maze[currentRowIndex][currentColumnIndex + 1] === emptyCell) {
                // We need to increment the column index to reach this exit.
                currentPathLength++;
                maze[currentRowIndex][currentColumnIndex] = visitedCell;
                currentColumnIndex++;
                continue;
            }
            if (currentColumnIndex > exitColumnIndex && maze[currentRowIndex][currentColumnIndex - 1] === emptyCell) {
                currentPathLength++;
                maze[currentRowIndex][currentColumnIndex] = visitedCell;
                currentColumnIndex--;
                continue;
            }

            // Naive, because it's getting late.
            keepLooking = false;            
        }

        // Reset any visited cells from this exit's exploration.
        for (let rowIndex = 0; rowIndex < n; rowIndex++) {
            for (let columnIndex = 0; columnIndex < m; columnIndex++) {
                if (maze[rowIndex][columnIndex] === visitedCell) {
                    maze[rowIndex][columnIndex] = emptyCell;
                }
            }
        }
    }

    return (bestPathLength === Number.MAX_SAFE_INTEGER) ? -1 : bestPathLength;
};

const maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2];
const result = nearestExit(maze, entrance);
console.log('!');

