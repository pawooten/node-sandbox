/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    // return the area of the largest rectangle in the histogram.

    let currentHeight,  rectangles = [], activeRectangles = [], survivingActiveRectangles, currentActiveRectangle;
    for (let index = 0; index < heights.length; index++) {
        currentHeight = heights[index];

        survivingActiveRectangles = [];
        // Does the rectangle of this index close or extend any of the active rectangles?
        for (let activeIndex = 0; activeIndex < activeRectangles.length; activeIndex++) {
            currentActiveRectangle = activeRectangles[activeIndex];
            if (currentActiveRectangle.height > currentHeight) {
                // This rectangle is closed as the result of processing the rectangle of the current index, because
                // it isn't tall enough to continue the rectangle.
                rectangles.push(currentActiveRectangle);
            } else {
                // This rectangle is extended by the rectangle of the current index, so it survives to the next round.
                currentActiveRectangle.width += 1;
                survivingActiveRectangles.push(currentActiveRectangle);
            }
        }
        
        // What new rectangles does this one start?
        for (; currentHeight > 0; currentHeight--) {
            survivingActiveRectangles.push({ height: currentHeight, width: 1});
        }

        activeRectangles = survivingActiveRectangles;
    }

    rectangles = rectangles.concat(survivingActiveRectangles);
    if (rectangles.length === 0) {
        return 0;
    }
    let maxArea = Math.max(...rectangles.map(rectangle => rectangle.width * rectangle.height));
    return maxArea;
};
const heights = [0];
const result = largestRectangleArea(heights);
console.log('!');