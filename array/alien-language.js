/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    const orderMap = new Map();
    let value = 0;
    for (const orderCharacter of order.split('')) {
        orderMap.set(orderCharacter, value);
        value++;
    }

    const words2 = [...words];
    words2.sort((left, right) => {
        let leftCharacters = left.split(''), rightCharacters = right.split('');
        let length = Math.min(leftCharacters.length, rightCharacters.length);
        for (let index = 0; index < length; index++) {
            let diff = orderMap.get(leftCharacters[index]) - orderMap.get(rightCharacters[index]);
            if (diff !== 0) {
                return diff;
            }
        }
        return leftCharacters.length - rightCharacters.length;
    });
    const length = words2.length;
    for (let index = 0; index < length; index++) {
        if (words[index] !== words2[index]) {
            return false;
        }
    }
    return true;
};

const words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz";
const result = isAlienSorted(words, order);
console.log('!');