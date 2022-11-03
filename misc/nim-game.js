/**
 * @param {number} n
 * @return {boolean}
 */
 var canWinNim = function(n) {
    // Return true if you can win the game assuming both players play optimally.
    // Each player removes between one and four stones per turn. Each player wants their opponent to have a turn when four stones remain,
    // Since their opponent will be forced to remove at least one stone, and on the next turn the player can remove all remaining stones
    // including the last stone, and win the game.

    if (n <= 3) {
        // The player's turn is first, and they're able to remove all remaining stones during that turn, they win.
        return true;
    }

    return n % 4 !== 0;
};
const n = 1;
const result = canWinNim(n);
console.log('!');