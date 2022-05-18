/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let grid = [];

    const message = s.split('');
    // Each character of the message must be placed in the grid
    for (let index = 0; index < message.length;) {
        let startingRow = 1;
        if (index === 0 || numRows === 1) {
            startingRow = 0;
        }
        // Down stroke of the zig, from the top row to the bottom
        for (let row = startingRow; row < numRows; row++) {
            let rowArray = grid[row] || [];
            rowArray.push(message[index]);
            grid[row] = rowArray;
            index += 1;
        }
        // Diagonal stroke. Skip the bottom row.
        for (let row = numRows - 2; row >= 0; row--) {
            let rowArray = grid[row] || [];
            rowArray.push(message[index]);
            grid[row] = rowArray;
            index += 1;
        }
    }

    return grid.map(row => row.join('')).join('');

};
const s = "AB", numRows = 1;
const result = convert(s, numRows);
console.log('!');