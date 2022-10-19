/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let min = 0, max = n;
    let currentGuess = Math.round(n / 2);
    do {
        currentGuess = min + Math.round((max - min) / 2);
        switch (guess(currentGuess)) {
            case -1:
                // Guess was too high
                max = currentGuess;                
                break;
            case 1:
                // Guess was too low
                min = currentGuess;
                break;
            case 0:
                // Jackpot!
                return currentGuess;
                break;
        }    
    } while (true);
};
const guess = (num) => {
    if (num === 6) {
        return 0;
    }
    if (num < 6) {
        return 1;
    }
    return -1;

}

const n = 10, pick = 6;
const result = guessNumber(n);
console.log('!');