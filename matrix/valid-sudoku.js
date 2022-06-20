/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    // Return true if the filled values of the board are valid sudoku.

    // Verify each row of the board does not contain the same value more than once.
    let index;
    for (index = 0; index < 9; index++) {
        if (containsDuplicates(board[index])) {
            // At least one row of this board contains a duplicate, the board is invalid.
            return false;
        }
    }
    // Verify each column of the board does not contain the same value more than once.
    for (index = 0; index < 9; index++) {
        let column = board.map(row => row[index]);
        if (containsDuplicates(column)) {
            // At least one column of this board contains a duplicate, the board is invalid.
            return false;
        }
    }
    
    // Verify each 3x3 sub board does not contain duplicates.
    for (index = 0; index < 9; index += 3) {
        let boardA = [ ...board[index].slice(0, 2), ...board[index + 1].slice(0, 2), ...board[index + 2].slice(0,2) ];
        if (containsDuplicates(boardA)) {
            return false;
        }
        let boardB = [ ...board[index].slice(3, 5), ...board[index + 1].slice(3, 5), ...board[index + 2].slice(3, 5) ];
        if (containsDuplicates(boardB)) {
            return false;
        }
        let boardC = [ ...board[index].slice(6, 8), ...board[index + 1].slice(6, 8), ...board[index + 2].slice(6, 8) ];
        if (containsDuplicates(boardB)) {
            return false;
        }
    }
    return true;
};

const containsDuplicates = function(values) {
    let valueSet = new Set();
    const length = values.length;
    for (let index = 0; index < length; index++) {
        let currentValue = values[index];
        if (currentValue === '.') {
            // Empty cells should not be considered duplicates.
            continue;
        }
        if (valueSet.has(currentValue)) {
            // We've encountered a value which is already present in the set, indicating a duplicate.
            return true;
        }
        valueSet.add(currentValue);
    }
    // We've iterated over all values without finding a duplicate.
    return false;
}

const board = 
[[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]];
const result = isValidSudoku(board);
console.log('');