/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    // Return the minimum path sub from top to bottom. For each step, you may move to either index i or index i + 1 on the next row.

    // Iterate over each row of the triangle, skipping the top row
    const totalRows = triangle.length;
    for (let rowIndex = 1; rowIndex < totalRows; rowIndex++) {
        const rowLength = triangle[rowIndex].length;
        for (let columnIndex = 0; columnIndex < rowLength; columnIndex++) {
            // Would it have been cheaper to reach this cell by incrementing columnIndex or not?
            const leftParentValue = triangle[rowIndex - 1][columnIndex - 1] ?? Infinity;
            const rightParentValue = triangle[rowIndex - 1][columnIndex] ?? Infinity;
            
            // Overwrite this element's value with it's value plus the cheapest cost to reach it as calculated above.
            triangle[rowIndex][columnIndex] += Math.min(leftParentValue, rightParentValue);
        }
    }

    // The lowest value of the last row of the triangle is the solution.
    return triangle[totalRows - 1].reduce((accumulator, pathSum) => {
        if (accumulator < pathSum) {
            return accumulator;
        }
        return pathSum;
    });
};

const triangle = [[-1],[2,3],[1,-1,-1]];
const result =minimumTotal(triangle);
console.log('!');