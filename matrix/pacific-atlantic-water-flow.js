/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    // Return a list of grid coordinates for which rain flows to both the Pacific (left and top) and Atlantic (right and bottom) oceans.

    let resultCells = [];

    // If I determine all cells that flow into the Pacific Ocean, and all that flow into the Atlantic, the intersect of those sets is the result.
    // Inversely (conversely?), any cell that is in neither dead end set flows into both.

    let pacificDeadEndCells = new Set(), atlanticDeadEndCells = new Set();
    
    // Iterate over all cells in the grid and determine if they flow into the pacific ocean or not. If they don't, add them to the dead end set.
    const rowCount = heights.length, columnCount = heights[0].length;
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            // Does rain in this cell flow into the pacific?
            let keeper = { reachedOcean: false }, currentKey = formatKey(rowIndex, columnIndex);
            walkPacific(heights, rowIndex, columnIndex, pacificDeadEndCells, keeper);
            if (!keeper.reachedOcean) {
                // This cell is a dead end for the pacific.
                pacificDeadEndCells.add(currentKey);
            }
            keeper.reachedOcean = false;
            walkAtlantic(heights, rowIndex, columnIndex, atlanticDeadEndCells, keeper);
            if (!keeper.reachedOcean) {
                // This cell is a dead end for the atlantic
                atlanticDeadEndCells.add(currentKey);
            }

            // Did this cell avoid being a dead end cell for both oceans?
            if (!pacificDeadEndCells.has(currentKey) && !atlanticDeadEndCells.has(currentKey)) {
                resultCells.push([rowIndex, columnIndex]);
            }
        }
    }
    return resultCells;
};

const formatKey = (rowIndex, columnIndex) => `${rowIndex}.${columnIndex}`;

const walkPacific = function(heights, rowIndex, columnIndex, deadEndCells, keeper) {
    if (rowIndex === 0 || columnIndex === 0) {
        // We've either reached the first row of the island, or the first column of some row of the island. Either way, we can flow into the pacific!
        keeper.reachedOcean = true;
        return;
    }
    let currentElevation = heights[rowIndex][columnIndex];
    // The cell to the left must be in bounds, since if we had reached zero, we'd have short circuited.
    if (currentElevation >= heights[rowIndex][columnIndex - 1] && !deadEndCells.has(formatKey(rowIndex, columnIndex - 1))) {
        // The elevation of the cell to our left is adequate for rain to flow into it.
        walkPacific(heights, rowIndex, columnIndex - 1, deadEndCells, keeper);
    }
    // The cell to the top must be in bounds, since if we had reached zero, we'd have short circuited.
    if (currentElevation >= heights[rowIndex - 1][columnIndex] && !deadEndCells.has(formatKey(rowIndex - 1, columnIndex))) {
        // The elevation of the cell to the top of us is adequate for rain to flow into it.
        walkPacific(heights, rowIndex - 1, columnIndex, deadEndCells, keeper);
    }

    // Right
    if (columnIndex + 1 < heights[rowIndex].length) {
        if (currentElevation >= heights[rowIndex][columnIndex + 1] && !deadEndCells.has(formatKey(rowIndex, columnIndex + 1))) {
            // THe elevation of this cell is adequate for the rain to flow
            walkPacific(heights, rowIndex, columnIndex + 1, deadEndCells, keeper);
        }
    }
    // Bottom
    if (rowIndex + 1 < heights.length) {
        if (currentElevation >= heights[rowIndex + 1][columnIndex] && !deadEndCells.has(formatKey(rowIndex + 1, columnIndex))) {
            // The elevation of this cell is adequate for the rain to flow
            walkPacific(heights, rowIndex + 1, columnIndex, deadEndCells, keeper);
        }
    }
}

const walkAtlantic = function(heights, rowIndex, columnIndex, deadEndCells, keeper) {
    if (rowIndex === heights.length - 1 || columnIndex === heights[rowIndex].length - 1) {
        // We've either reached the last row of the island, or the last column of some row of the island. Either way, we can flow into the atlantic!
        keeper.reachedOcean = true;
        return;
    }
    let currentElevation = heights[rowIndex][columnIndex];

    if (rowIndex - 1 >= 0) {
        if (currentElevation >= heights[rowIndex - 1][columnIndex] && !deadEndCells.has(formatKey(rowIndex - 1, columnIndex))) {
            // The elevation of the cel is adequate for rain to flow
            walkAtlantic(heights, rowIndex - 1, columnIndex, deadEndCells, keeper);
        }
    }
    // The cell to the right must be in bounds, since if we had reached the last one, we'd have short circuited.
    if (currentElevation >= heights[rowIndex][columnIndex + 1] && !deadEndCells.has(formatKey(rowIndex, columnIndex + 1))) {
        // The elevation of the cell to our right is adequate for rain to flow into it.
        walkAtlantic(heights, rowIndex, columnIndex + 1, deadEndCells, keeper);
    }
    // The cell to the bottom must be in bounds, since if we had reached the last one, we'd have short circuited.
    if (currentElevation >= heights[rowIndex + 1][columnIndex] && !deadEndCells.has(formatKey(rowIndex + 1, columnIndex))) {
        // The elevation of the cell to our bottom is adequate for rain to flow into it.
        walkAtlantic(heights, rowIndex + 1, columnIndex, deadEndCells, keeper);
    }

    // left
    if (columnIndex - 1 >= 0) {
        if (currentElevation >= heights[rowIndex][columnIndex - 1] && !deadEndCells.has(formatKey(rowIndex, columnIndex - 1))) {
            // The elevation of the cell to our left is adequate for rain to flow into it.
            walkAtlantic(heights, rowIndex, columnIndex - 1, deadEndCells, keeper);
        }
    }
}

const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
const result = pacificAtlantic(heights);
console.log('!');