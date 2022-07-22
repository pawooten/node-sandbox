/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var getRow = function(numRows) {
    // Handle the edge case that affects initialization.
    if (numRows === 0) {
        return [1];
    }
    if (numRows === 1) {
        return [1,1];
    }
    // Initialize the first two rows of the triangle.
    const rows = [[1], [1, 1]];
    while (rows.length <= numRows) {
        let row = [1];
        let previousRow = rows[rows.length - 1];
        for (let index = 0; index < previousRow.length - 1; index++) {
            row.push(previousRow[index] + previousRow[index + 1]);
        }
        row.push(1);
        rows.push(row);
    }
    return rows[rows.length - 1];
};
const rowIndex = 3;
const result = getRow(rowIndex);
console.log('!');