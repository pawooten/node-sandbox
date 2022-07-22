/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function(cardPoints, k) {
    // Each round, remove either the left-most or right-most card, depending on if the value uncovered 
    let score = 0, offset = 0;
    while (k > 0) {
        let firstCard = cardPoints[0];
        let lastCard = cardPoints[cardPoints.length - 1];
        if (k === 1) {
            // This is the last card of the hand, pick based strictly on whether the left or the right card has the highest score.
            if (firstCard < lastCard) {
                score += lastCard;
            } else {
                score += firstCard;
            }
        } else {
            // k > 1
            // take either the left or right card, depending on which will result in the highest overall score (the score of this card, plus remaining)
            if ( firstCard + maxScore( cardPoints.slice(1), k - 1 ) < lastCard + maxScore( cardPoints.slice(0, -2), k - 1  ) ) {
                cardPoints.pop();
                score += lastCard;
            } else {
                _ = cardPoints.shift();
                score += firstCard;
            }
        }
        k--;        
    }
    return score;
};
const cardPoints = [2,2,2], k = 3;
const result = maxScore(cardPoints, k);
console.log('!');