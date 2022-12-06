/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
 var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    // Return the total area covered by the rectangles as described by the coordinates.
    // The total area covered is the sum of the area of each rectangle minus any overlap between the rectangles.

    const areaA = (ax2 - ax1) * (ay2 - ay1);
    const areaB = (bx2 - bx1) * (by2 - by1);

    let overlapx1 = 0, overlapy1 = 0, overlapx2 = 0, overlapy2 = 0;
    if (bx1 >= ax1 && bx1 <= ax2) {
        // The left edge of rectangle b overlaps with rectangle a (in the horizontal plane).
        overlapx1 = bx1;
        overlapx2 = Math.min(ax2, bx2);
    }
    if (bx2 >= ax1 && bx2 <= ax2) {
        // The right edge of rectangle b overlaps with rectangle a (in the horizontal plane).
        overlapx2 = bx2;
        overlapx1 = Math.max(ax1, bx1);
    }
    if (ax1 >= bx1 && ax1 <= bx2) {
        // The left edge of rectangle a overlaps with rectangle b (in the horizontal plane).
        overlapx1 = ax1;
        overlapx2 = Math.min(ax2, bx2);
    }
    if (ax2 >= bx1 && ax2 <= bx2) {
        // The right edge of rectangle a overlaps with rectangle b (in the horizontal plane).
        overlapx2 = ax2;
        overlapx1 = Math.max(ax1, bx1);
    }
    if (by2 <= ay2 && by2 >= ay1) {
        // The top edge of rectangle b overlaps with rectangle a (in the vertical plane).
        overlapy2 = by2;
        overlapy1 = Math.max(ay1, by1);
    }
    if (by1 <= ay2 && by1 >= ay1) {
        // The bottom edge of rectangle b overlaps with rectangle a (in the vertical plane).
        overlapy1 = by1;
        overlapy2 = Math.min(ay2, by2);
    }
    if (ay1 <= by2 && ay1 >= by1) {
        // The top edge of rectanlge a overlaps with rectangle b (in the vertical plane).
        overlapy2 = ay1;
        overlapy1 = Math.min(by2, ay2);
    }
    if (ay2 <= by2 && ay2 >= by1) {
        // The bottom edge of rectangle a overlaps with rectangle b (in the vertical plane).
        overlapy2 = ay2;
        overlapy1 = Math.max(ay1, by1);
    }


    const overlapArea = (overlapx2 - overlapx1) * (overlapy2 - overlapy1);

    return areaA + areaB - overlapArea;
};

const ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -3, by1 = -3, bx2 = 3, by2 = -1;
const result = computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
console.log('!');