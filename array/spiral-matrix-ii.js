/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    // generate an n x n matrix filled with elemetns from 1 to n2 in spiral order

    // initialize an empty grid of the appropriate length and width
    let grid = [], rowIndex, columnIndex;
    for (rowIndex = 0; rowIndex < n; rowIndex++) {
        let row = [];
        for (columnIndex = 0; columnIndex < n; columnIndex++) {
            row.push(0);
        }
        grid.push(row);
    }

    const n2 = n * n;
    let value = 1, direction = 'right', newRowIndex, newColumnIndex;
    rowIndex = 0; columnIndex = 0;
    while (value <= n2) {
        // Set the cell to current value and increment to the next value in preparation for the next iteration
        grid[rowIndex][columnIndex] = value;
        value++;
        switch (direction) {
            case 'up':
                // Moving up, but is the next cell in that direction out of bounds or already filled with a non-zero value? If so, we must turn
                newRowIndex = rowIndex - 1;
                if (newRowIndex >= 0 && !grid[newRowIndex][columnIndex])  {
                    rowIndex = newRowIndex;
                } else {
                    // Turn right, resulting in moving rightward
                    direction = 'right';
                    columnIndex++;
                }
                break;
            case 'right':
                // Moving right, but is the cell to our right out of bounds or already filled with a non-zero value? If so, we must turn
                newColumnIndex = columnIndex + 1;
                if (newColumnIndex < n && !grid[rowIndex][newColumnIndex])  {
                    columnIndex = newColumnIndex;
                } else {
                    // Turn right, resulting in moving downward
                    direction = 'down';
                    rowIndex++;
                }
                break;
            case 'down':
                // Moving down, but is the next cell in that direction out of bounds or already filled with a non-zero value? If so, we must turn
                newRowIndex = rowIndex + 1;
                if (newRowIndex < n && !grid[newRowIndex][columnIndex])  {
                    rowIndex = newRowIndex;
                } else {
                    // Turn right, resulting in moving leftward
                    direction = 'left';
                    columnIndex--;
                }
                break;
            case 'left':
                // Moving left, but is the cell to our left out of bounds or already filled with a non-zero value? If so, we must turn
                newColumnIndex = columnIndex - 1;
                if (newColumnIndex >= 0 && !grid[rowIndex][newColumnIndex])  {
                    columnIndex = newColumnIndex;
                } else {
                    // Turn left, resulting in moving downward
                    direction = 'up';
                    rowIndex--;
                }
                break;
        }
    }
    return grid;
};
const n = 1;
const result = generateMatrix(n);
console.log('!');