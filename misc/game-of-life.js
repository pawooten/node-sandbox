/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    // 1 = live, 0 = dead
    const m = board.length, n = board[0].length;
    let newBoard = [];
    for (let rowIndex = 0; rowIndex < m; rowIndex++) {
        let newRow = [];
        for (let columnIndex = 0; columnIndex < n; columnIndex++) {
            newRow.push(evaluateCell(board, rowIndex, columnIndex) ? 1 : 0);
        }
        newBoard.push(newRow);
    }
    
    // Copy the newboard values onto the old board
    for (let rowIndex = 0; rowIndex < m; rowIndex++) {
        for (let columnIndex = 0; columnIndex < n; columnIndex++) {
            board[rowIndex][columnIndex] = newBoard[rowIndex][columnIndex];
        }
    }
    return newBoard;
};
const isValidCell = function(board, neighborIndex) {
    let rowIndex, columnIndex;
    [rowIndex, columnIndex] = [...neighborIndex];
    const length = board.length, rowLength = board[0].length;
    if (rowIndex < 0 || rowIndex > length - 1) {
        return false;
    }
    if (columnIndex < 0 || columnIndex > rowLength - 1) {
        return false;
    }
    return true;
}
const isLivingNeighbor = function(board, neighborIndex) {
    let rowIndex, columnIndex;
    [rowIndex, columnIndex] = [...neighborIndex];
    const length = board.length, rowLength = board[0].length;
    if (rowIndex < 0 || rowIndex > length - 1) {
        return false;
    }
    if (columnIndex < 0 || columnIndex > rowLength - 1) {
        return false;
    }
    return board[rowIndex][columnIndex] === 1;
}
const getNeighborIndices = function(rowIndex, columnIndex) {
    return [
        [rowIndex - 1, columnIndex - 1],
        [rowIndex - 1, columnIndex + 0],
        [rowIndex - 1, columnIndex + 1],
        [rowIndex + 0, columnIndex - 1], // Note: do not add self to the list of neighbors
        [rowIndex + 0, columnIndex + 1],
        [rowIndex + 1, columnIndex - 1],
        [rowIndex + 1, columnIndex + 0],
        [rowIndex + 1, columnIndex + 1],
    ];
}
const evaluateCell = function(board, rowIndex, columnIndex) {
    let validNeighbors = getNeighborIndices(rowIndex, columnIndex).filter(index => isValidCell(board, index));
    let livingNeighborCount = validNeighbors.filter(index => isLivingNeighbor(board, index)).length;

    if (board[rowIndex][columnIndex] === 0) {
        // The cell is dead, is it being reproduced?
        return livingNeighborCount === 3;        
    }
    // The cell is currently alive

    // Does the cell die from under-population because there are less than two live neighbors?
    if (livingNeighborCount < 2) {
        return false;
    }
    // Does the cell live because of two or three (but not more) neighbors?
    if (livingNeighborCount === 2 || livingNeighborCount === 3) {
        return true;
    }

    // Does the cell die from over-population?
    if (livingNeighborCount > 3) {
        return false;
    }

    return true;
}

const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
const result = gameOfLife(board);
console.log('!');