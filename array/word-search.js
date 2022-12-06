/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    // Return true if board contains a string of sequences that compose word, otherwise false.

    const n = board.length, m = board[0].length, characters = word.split(''), lastCharacterIndex = characters.length - 1, startingCharacter = characters[0];
    let matchFound = false;

    const matchesWord = (characterIndex, rowIndex, columnIndex, pathSet) => {
        if (matchFound) {
            // We've already found at least one match, don't bother exploring any more paths because we don't care about them.
            return;
        }
        if (board[rowIndex][columnIndex] !== characters[characterIndex]) {
            // The character in this cell of the board doesn't match the character we need, no match.
            return;
        }

        const key = `${rowIndex}.${columnIndex}`;
        if (pathSet.has(key)) {
            // This cell has already been used previously in this path, short circuit.
            return;
        }
        pathSet.add(key);

        // Have we satisfied the last character of our search word?
        if (characterIndex === lastCharacterIndex) {
            // We have!
            matchFound = true;
            return;
        }

        // The character in this cell of the board matches the current character of the search word. So far so good.
        characterIndex++;
        const nextCharacter = characters[characterIndex];
        
        if (rowIndex > 0 && board[rowIndex - 1][columnIndex] === nextCharacter) {
            matchesWord(characterIndex, rowIndex - 1, columnIndex, new Set(pathSet));
        }
        if (rowIndex < n - 1 && board[rowIndex + 1][columnIndex] === nextCharacter) {
            matchesWord(characterIndex, rowIndex + 1, columnIndex, new Set(pathSet));
        }
        if (columnIndex > 0 && board[rowIndex][columnIndex - 1] === nextCharacter) {
            matchesWord(characterIndex, rowIndex, columnIndex - 1, new Set(pathSet));
        }
        if (columnIndex < m - 1 && board[rowIndex][columnIndex + 1] === nextCharacter) {
            matchesWord(characterIndex, rowIndex, columnIndex + 1, new Set(pathSet));
        }
    };

    // Iterate over each cell of the board, looking for instances of startingCharacter from which we may be able to compose word.
    let rowIndex, columnIndex;
    for (rowIndex = 0; rowIndex < n && !matchFound; rowIndex++) {
        for (columnIndex = 0; columnIndex < m && !matchFound; columnIndex++) {
            if (board[rowIndex][columnIndex] === startingCharacter) {
                matchesWord(0, rowIndex, columnIndex, new Set());
            }
        }
    }
    return matchFound;
};

const board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], word = 'ABCESEEEFS';
const result = exist(board, word);
console.log('!');