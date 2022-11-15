/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let x = 0, y = 0;
    for (const move of moves.split('')) {
        switch (move) {
            case 'U':
                y--;
                break;
            case 'R':
                x++;
                 break;
            case 'D':
                y++;
                break;
            case 'L':
                x--;
                break;
        }
    }
    return x === 0 && y === 0;
};

const moves = "LL";
const result = judgeCircle(moves);
console.log('!');