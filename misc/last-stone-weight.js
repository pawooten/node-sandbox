/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    // stones[i] is the weight of the ith stone.
    // On each turn, we choose the heaviest two stones and smash them together.
    // The heaviest two stones have weights x and y with x <= y. The result of the smash is
    // if x == y, both stones are destroyed and
    // if x != y, the stone of the weight x is destroyed and the stone of weight y has new weight y - x.
    // At the end of the game, there is at most one stone left.

    while (stones.length > 1) {
        // Select the two heaviest stones.
        stones.sort((left, right) => left - right);
        let heaviest = stones.pop();
        let secondHeaviest = stones.pop();
        if (heaviest != secondHeaviest)  {
            stones.push(heaviest - secondHeaviest);
        }
    }
    if (stones.length === 1) {
        return stones[0];
    }
    return 0;
};
const stones = [1];
const result = lastStoneWeight(stones);
console.log('!');