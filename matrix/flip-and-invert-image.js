/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const n = image.length;
    // First, flip the image horizontally. Iterate through each row of the matrix.
    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
        image[rowIndex] = [...image[rowIndex].reverse()];
    }

    // Next, invert each pixel of the image.
    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
        for (let columnIndex = 0; columnIndex < n; columnIndex++) {
            image[rowIndex][columnIndex] = image[rowIndex][columnIndex] ? 0 : 1;
        }
    }

    return image;
};


const image = [[1,1,0],[1,0,1],[0,0,0]];
const result = flipAndInvertImage(image);
console.log('!');