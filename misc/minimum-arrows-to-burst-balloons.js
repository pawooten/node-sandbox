/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    const length = points.length;

    // Return true if the points overlap, otherwise false.
    const overlap = (pointA, pointB) => {
        const [aLeft, aRight] = pointA, [bLeft, bRight] = pointB;
        if (bLeft >= aLeft && bLeft <= aRight) {
            // Left edge of b overlaps with a
            return true;
        }
        if (bRight >= aLeft && bRight <= aRight) {
            // Right edge of b overlaps with a
            return true;
        }
        if (bLeft === aLeft && bRight === aRight) {
            // Perfect overlap
            return true;
        }
        if (bLeft >= aLeft && bRight <= aRight) {
            // a completely obscures b.
            return true;
        }
        if (aLeft >= bLeft && aRight <= bRight) {
            // b completely obscures a.
            return true;
        }
        return false;
    };

    // Return a number describing the index of the last overlapping balloon relative to the specified parameter.
    // If no balloons overlap, return 0;    
    const findOverlapLength = (currentIndex) => {
        const startingBalloon = points[currentIndex];
        let overlapLength = 0;
        // Iterate across the remaining points, starting with the next one.
        for (currentIndex++; currentIndex < length; currentIndex++) {
            if (!overlap(startingBalloon, points[currentIndex])) {
                // This balloon doesn't overlap the first one, the previous balloon was the last to overlap.
                break;
            }
            overlapLength++;
        }
        return overlapLength;
    };

    // Sort the set of balloon points by left edge ascending.
    points.sort((left, right) => left[0] - right[0]);

    let arrowCount = 0, overlapLength, overlapBalloons;
    // Iterate across each balloon, starting with the balloon whose left-edge is smallest.
    for (let index = 0; index < length; index++) {
        // Determine the set of other balloons (if any) that overlap with this balloon.
        overlapLength = findOverlapLength(index);

        // If there aren't any overlapping balloons, we must fire a single arrow to pop this balloon.
        if (overlapLength === 0) {
            arrowCount++;
        } else {
            // There is overlap, score the best shot between the left edge and right edge of the current balloon.
            overlapBalloons = points.slice(index + 1, index + 1 + overlapLength);

            // Is it possible for the highest score arrow to "skip" a balloon?
        }
    }
    return arrowCount;
};

const points = [[10,16],[2,8],[1,6],[7,12]];
const result = findMinArrowShots(points);
console.log('!');