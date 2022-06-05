/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    // Each queen must not occupy the same row or the same column of another queen.
    // Additionally, each a queen must not be diagonally in line with another queen.

    // Attempt to generate boards based on a queen in each cell of the top row of the grid.
    let sets = [], i;
    for (i = 0; i < n; i++) {
        findSet([[0, i]], n, sets);
    }

    let results = [];
    // Convert each set (coordinates of queens) into a board of 'Q' and '.' characters.
    const length = sets.length;
    for ( i = 0; i < length; i++) {
        let set = sets[i];
        // Populate a grid with '.' characters
        let grid = [];
        for (let subI = 0; subI < n; subI++) {
            grid.push(new Array(n).fill('.'));
        }
        // Mark each queen on the grid.
        set.forEach(queen => grid[queen[0]][queen[1]] = 'Q');

        // Join each row into a string and push the grid onto the results array.
        results.push(grid.map(row => row.join('')));
    }
    // Return the boards of each set;
    return results;
};
const findSet = function(queens, n, sets) {
    let length = queens.length;
    if (length === n) {
        // We've solved a set
        sets.push(queens);
        return;
    }
    // We need to place additional queens on the board, in the next row of the grid.
    let spots = findSpots(queens, n, queens.length);
    if (spots.length === 0) {
        // This board cannot be solved because there are no spots in this row to place a queen.
        return;
    }
    // Explore each eligible spot
    spots.forEach(spot => findSet([...queens, spot], n, sets));
}
const findSpots = function(queens, n, rowIndex) {
    let spots = [];
    for (let i = 0; i < n; i++) {
        let candidatePoint = [rowIndex, i];
        // Is candidatePoint in the same column as any other queen?
        if (queens.some(queen => queen[1] === candidatePoint[1])) {
            // This candidatePoint isn't valid, move on to the next one.
            continue;
        }
        // Is candidatePoint in the diagonal of any other queen?
        if (queens.some(queen => {
            let deltaX = queen[0] - candidatePoint[0], deltaY = queen[1] - candidatePoint[1];
            return Math.abs(deltaX) === Math.abs(deltaY);
        })) {
            // This candidatePoint also isn't valid, move on to the next one.
            continue;
        }
        // We haven't continued, so this point is eligible to place a queen in.
        spots.push(candidatePoint);
    }
    return spots;
}

const n = 4;
const result = solveNQueens(n);
console.log('!');
// let queens = [ [0,0], [1,3]];
// findSpots(queens, n, queens.length);