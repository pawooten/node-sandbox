/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {

   const rowCount = 9, columnCount = 9;
   let rowIndex, columnIndex;
    // Validate rows contain the digits 1-9 without repetition. Iterate through each row, and 
    for (rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        if (!isValidSudokuSet(board[rowIndex])) {
            // This row is invalid, it must contain a duplicate.
            return false;
        }
    }

    // validate columns contain the digits 1-9 without repetition.
    for (columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        if (!isValidSudokuSet(board.map(row => row[columnIndex]))) {
            // This column is invalid, it must contain a duplicate.
            return false;
        }
    }

    // validate each of the nine 3x3 sub-boxes of the grid contain the digits 1-9 without repetition.
    // Iterate across each of the three "triple rows" of the grid, one at a time.
    // Within each triple row, validate each 3x3 grid.
    let subGrid;
    for (rowIndex = 0;rowIndex < rowCount; rowIndex += 3) {
        for (columnIndex = 0; columnIndex < columnCount; columnIndex += 3) {
            subGrid = [];
            subGrid.push(board[rowIndex][columnIndex], board[rowIndex][columnIndex + 1], board[rowIndex][columnIndex + 2]);
            subGrid.push(board[rowIndex + 1][columnIndex], board[rowIndex + 1][columnIndex + 1], board[rowIndex + 1][columnIndex + 2]);
            subGrid.push(board[rowIndex + 2][columnIndex], board[rowIndex + 2][columnIndex + 1], board[rowIndex + 2][columnIndex + 2]);
            if (!isValidSudokuSet(subGrid)) {
                // This subgrid is invalid, it must contain a duplicate.
                return false;
            }
        }
    }

    // We've validated each row, column and subgrid without shortcircuiting, the grid is valid!
    return true;
 };

const isValidSudokuSet = (nums) => {
    const filtered = nums.filter(val => val != '.');
    const set = new Set(filtered);
    return filtered.length === set.size;
}

 const board = 
 [[".",".","4",".",".",".","6","3","."],
 [".",".",".",".",".",".",".",".","."],
 ["5",".",".",".",".",".",".","9","."],
 [".",".",".","5","6",".",".",".","."],
 ["4",".","3",".",".",".",".",".","1"],
 [".",".",".","7",".",".",".",".","."],
 [".",".",".","5",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."]];
const result = isValidSudoku(board);
console.log('!');