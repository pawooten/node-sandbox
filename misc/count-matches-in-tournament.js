/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matchCount = 0, currentMatchCount;
    while (n > 1) {
        if (n % 2 === 0) {
            // An even number of teams remain in the tournament. n/2 matches are played and n/2 teams advance to the next round of the tournament.
            n /= 2;
            matchCount += n;
        } else {
            // An odd number of teams remain in the tournament.
            currentMatchCount = (n - 1) / 2;
            matchCount += currentMatchCount;
            // After this round, one random team advances along with the winners of each match which was played.
            n = currentMatchCount + 1;
        }
    }

    return matchCount;    
};

const n = 14;
const result = numberOfMatches(n);
console.log('!');