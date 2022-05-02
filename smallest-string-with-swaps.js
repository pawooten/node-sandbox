/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
 var smallestStringWithSwaps = function(s, pairs) {
    let swapped, characters = s.split('');
    do {
        swapped = false;
        // Interate over each pair of swappable indices. For each pair, if swapping results in a lower lexicographical string, perform the swap.
        // continue until no more swaps are performed.
        pairs.forEach(pair => {
            let index0 = pair[0], index1 = pair[1];
            let value0 = characters[index0], value1 = characters[index1];

            if (value1 < value0) {
                swapped = true;
                characters[index0] = value1;
                characters[index1] = value0;
            }
        });
    } while (swapped);
    return characters.join('');
};
const s = "dcab", pairs = [[0,3],[1,2],[0,2]];
const result = smallestStringWithSwaps(s, pairs);
console.log('!');