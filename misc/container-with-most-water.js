/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(heights) {
     // too slow
    // let currentMaxArea = 0;
    // heights.forEach((heightA, indexA) => {
    //     for (let indexB = 0; indexB < heights.length; indexB++) {
    //         if (indexB !== indexA) {
    //             let area = Math.min(heightA, heights[indexB]) * (indexB - indexA);
    //             currentMaxArea = Math.max(currentMaxArea, area);
    //         }
    //     }
    // });
    // return currentMaxArea;

    // The first line is the left edge of the container until a larger container with a different left edge is identified.
    let currentArea = 0, leftIndex = 0, currentMaxArea = 0;
    // Start comparing bucket sizes against the 1th element
    for (let index = 1; index < heights.length; index++) {
        currentArea = Math.min(heights[leftIndex], heights[index]) * (index - leftIndex);
        currentArea = Math.max(currentMaxArea, currentArea);
        
    }
};
const heights = [1,1];
const result = maxArea(heights);
console.log('!');