/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
 var furthestBuilding = function(heights, bricks, ladders) {
    // You start from building 0 and move to the next building.
    // While moving from building i to building i+1,
    // If the current building's height >= next building's height, no ladder or bricks needed (you just leap the gap)
    // If the current building's height is < next building's height, you can use one ladder or h[i+1] - h[i] bricks.

    let recordKeeper = { maxBuildingIndex: 0 };
    explorePaths(heights, bricks, ladders, 0, recordKeeper);
    return recordKeeper.maxBuildingIndex;
};
const explorePaths = function(heights, remainingBricks, remainingLadders, currentBuildingIndex, recordKeeper) {
    if (recordKeeper.maxBuildingIndex === heights.length - 1) {
        return;
    }
    recordKeeper.maxBuildingIndex = Math.max(recordKeeper.maxBuildingIndex, currentBuildingIndex);    
    if (currentBuildingIndex === heights.length - 1) {
        // We made it to the last building, wow!
        recordKeeper.maxBuildingIndex = heights.length - 1;
        return;
    }
    // We haven't reached the last building yet. What is the height difference between the next building and the current building?
    let heightDifference = heights[currentBuildingIndex + 1] - heights[currentBuildingIndex];
    if (heightDifference <= 0) {
        // The character can leap from the current building to the next building, either because they are the same height or
        // the next building has a lower height than the current building.

        // Continue exploring, moving to the next building doesn't cost us bricks or ladders.
        explorePaths(heights, remainingBricks, remainingLadders, currentBuildingIndex + 1, recordKeeper);
        return;
    }
    // Do we have any bricks left that we can use to reach the next building?
    if (remainingBricks > heightDifference) {
        // We have enough bricks to reach the next building.
        explorePaths(heights, remainingBricks - heightDifference, remainingLadders, currentBuildingIndex + 1, recordKeeper);
        // Do not short circuit, since it is possible we also have remaining ladders and we should explore both paths
    }
    // Do we have any ladders left that we can use to reach the next building?
    if (remainingLadders > 0) {
        explorePaths(heights, remainingBricks, remainingLadders - 1, currentBuildingIndex + 1, recordKeeper);
    }
}
const heights = [14,3,19,3], bricks = 17, ladders = 0;
const result = furthestBuilding(heights, bricks, ladders);
console.log('!');