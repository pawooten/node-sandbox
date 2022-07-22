/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
 var furthestBuilding = function(heights, bricks, ladders) {
    // Iterate over the array of building heights and calculate the difference  in height between each building.
    const heightDifferences = [];
    const length = heights.length;
    for (let index = 0; index < length - 1; index++) {
        heightDifferences.push(heights[index + 1] - heights[index]);
    }
    // Save the ladders for the largest height differences, since these would use up the most bricks.
    // Advance a cursor through the array of height differences. Advance as far as you can using bricks.
    // Once we've figured out how many buildings we can advance from bricks, swap out the x most expensive bricks with ladders, and see if we can advance further.
    let cursor = 0, currentBricks = bricks;
    do {
        // Advance the cursor as far as we can with bricks only.
        while (currentBricks > 0 && cursor < heightDifferences.length) {
            let heightDifference = heightDifferences[cursor];
            if (heightDifference > 0) {
                currentBricks -= heightDifferences[cursor];
            }
            cursor++;
        }
        while (currentBricks < 0) {
            // Correct any overshot that resulted in a negative value of currentBricks, since that is impossible.
            cursor--;
            let heightDifference  = heightDifferences[cursor];
            if (hei,ghtDifference > 0) {
                currentBricks += heightDifference;
            }
        }
        if (ladders > 0) {
            // Replace the most expensive height difference with a ladder if we have one, and reclaim the bricks that were allocated to that height difference.
            let cursorSubset = heightDifferences.slice(0, cursor + 1);
            let highestCost = Math.max(...cursorSubset);
            let highestCostIndex = cursorSubset.indexOf(highestCost);
            ladders--;
            if (highestCostIndex === cursorSubset.length - 1) {
                // The highestCost height difference isn't one we've passed with bricks, it is the difference between our current building and the next one.
                cursor++;
            } else {
                // The highestCost height difference isn't the last one in the subset.
                // 'Undo' the bricks that were spent on this height difference.
                currentBricks += highestCost;
            }
            // Overwrite this height difference in case we have additional ladders to allocate in a future iteration.
            heightDifferences[highestCostIndex] = 0;
        }

    } while (ladders > 0);

    // Advance the cursor one last try
    while (currentBricks > 0 && cursor < heightDifferences.length) {
        let heightDifference = heightDifferences[cursor];
        if (heightDifference > 0) {
            currentBricks -= heightDifferences[cursor];
        }
        cursor++;
    }
    return cursor - 1;
 }
 const  heights = [14, 3, 19, 3], bricks = 17, ladders = 0;
 const result = furthestBuilding(heights, bricks, ladders);
 console.log('!');