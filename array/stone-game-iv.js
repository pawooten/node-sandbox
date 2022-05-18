/**
 * @param {number} n
 * @return {boolean}
 */
 var winnerSquareGame = function(n) {
    let squares = [], squared;
    // Pre-commute the squares we care about
    for ( let i = 1; squared = Math.pow(i, 2), squared < n; i++) {
        squares[i] = squared;
    }

    let aliceWins = false;

    // remove any non-zero square number of stones from the pile. If a player cannot make a move, they lose.
    // return true if alice wins, otherwise false.
    while (n > 0) {
        // at least one stone remains, so the game isn't over yet.
        n -= getNextMove(squares, n);
        if (n === 0) {
            // Alice just removed the last stone(s), either by removing a single stone, or an integer square count of stones
            // There are no stones for Bob's turn, so Bob lost.
            aliceWins = true;
            continue;
        }

        // At least one stone remains, now it's bob's turn.
        n -= getNextMove(squares, n);
        if (n === 0) {
            // Bob just removed the last stone(s), either by removing a single stone or an integer square count of stones
            // There are no stones for Alice's next turn, so Bob won.
            aliceWins = false;
        }
    }
    return aliceWins;
};
const getLargestSquare = function(n, squares) {
    let i = 1;
    for (; Math.pow(i, 2) <= n; i++) {}
    return Math.pow(i - 1, 2);
}
const getNextMove = function(squares, n) {
    // Can I win the game in this move? If yes, win
    // What is the highest integer square of stones i can remove without leaving the game winnable by my opponent in their next play
    const largestSquare = getLargestSquare(n);
    if (largestSquare === n) {
        return largestSquare;
    }
    // Is the largestSquare one? If so I have no choice and must remove one stone
    if (largestSquare === 1) {
        return 1;
    }
    const remainder = n - largestSquare;
    if ( remainder != 1 && !squares.includes(remainder)) {
        // Removing the largestSquare is safe, because doing so won't result in either 1 stone remaining or an integer square of stones remaining
        return largestSquare;
    }
    // Is there a smaller square which is safe?
    let smallerSquare = largestSquare, smallerSquareRemainder;
    do {
        smallerSquare = Math.pow(Math.sqrt(smallerSquare) - 1, 2);
        smallerSquareRemainder = n - smallerSquare;
    } while (smallerSquareRemainder != 1 && squares.includes(smallerSquareRemainder));
    // There may or may not be a smaller square other than one
    if (smallerSquare === 0) {
        return 1;
    }
    return smallerSquare;
}

const n = 47;
const resut = winnerSquareGame(n);
console.log('!');