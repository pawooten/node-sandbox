/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
 var bagOfTokensScore = function(tokens, power) {
    const keeper = { highScore: 0 };

    // Sort the tokens in ascending order
    tokens.sort((left, right) => left - right);



    return keeper.highScore;
};

const walkTokens = function(tokens, power, currentScore, keeper) {
    const length = tokens.length;
    for (let index = 0; index < length; index++) {
        let currentToken = tokens[index];
        if (currentToken <= power) {
            // We can play this token face up.
            
        } else {
            // We've exhausted the tokens which are eligible to be played face up.
            break;
        }
    }
}

const tokens = [100], power = 50;
const result = bagOfTokensScore(tokens, power);
console.log('!');