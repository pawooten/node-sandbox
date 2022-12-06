/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    // Given an integer n, return the least number of perfect squares whose sum is n.
    
    // Determine the set of squares <= n 
    const squares = [];
    let root = 1, square;
    do {
        square = Math.pow(root, 2);
        root++;
        if (square <= n) {
            squares.unshift(square);
        }
    } while (square <= n);
    // 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

    let count = 0;
    for (const square of squares) {
        while (n >= square) {
            count++;
            n -= square;
        }
    }
    return count;
};

const n = 12;
const result = numSquares(n);
console.log('!');