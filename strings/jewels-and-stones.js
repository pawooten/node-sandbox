/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    const jewelSet = new Set(jewels.split(''));
    let count = 0;
    for (const stone of stones.split('')) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }
    return count;
};

const jewels = "aA", stones = "aAAbbbb";
const result = numJewelsInStones(jewels, stones);
console.log('!');