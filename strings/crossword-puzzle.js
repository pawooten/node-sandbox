/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var placeWordInCrossword = function(board, word) {
    // m xn matrix board. # = blocked cells. ' ' = empty cells, lowercase characters are characters from solved words on the board
    // words can be placed horizontally left to right or right to left, or vertically top to bottom or bottom to top.
    
    // return true if word can be placed on board, otherwise false.

    // find all the horizontal spans whose length is the length of word in each row of the board.\
    const length = word.length;
    let index, valid, 
        rowSpans = board[0].join('').split('#').filter(span => span.length === length);

    if (rowSpans.some(rowSpan => {
        // Is this a forward match?
        valid = true;
        for (index = 0; index < length && valid; index++) {
            valid = rowSpan[index] === ' ' || rowSpan[index] === word[index];
        }
        if (valid) {
            return true;
        }
        // Is this a backward match?
        for (index = length - 1; index >= 0 && valid; index--) {
            valid = rowSpan[index] === ' ' || rowSpan[index] === word[index];
        }
        return valid;
    })) {
        // Found a spot
        return true;
    }

    const columnSpans = getColumnSpans(board, word);
    if (columnSpans.some(rowSpan => {
        // Is this a forward match?
        valid = true;
        for (index = 0; index < length && valid; index++) {
            valid = rowSpan[index] === ' ' || rowSpan[index] === word[index];
        }
        if (valid) {
            return true;
        }
        // Is this a backward match?
        for (index = length - 1; index >= 0 && valid; index--) {
            valid = rowSpan[index] === ' ' || rowSpan[index] === word[index];
        }
        return valid;
    })) {
        // Found a spot
        return true;
    }
    return false;
};
const getColumnSpans = function(board, word) {
    const length = word.length;
    let columnSpans = [];
    for (let index = 0; index < board[0].length; index++) {
        columnSpans = [...columnSpans,
        ...getColumnAsString(board, index).split('#').filter(span => span.length === length )];
    }
    return columnSpans;
}
const getColumnAsString = function(board, columnIndex) {
    let column = [];
    for (let index = 0; index < board[0].length; index++) {
        column.push(board[index][columnIndex]);
    }
    return column.join('');
}

const board = [["#", " ", "#"], [" ", " ", "#"], ["#", " ", "c"]], word = "ca"
const result = placeWordInCrossword(board, word);
console.log('!');