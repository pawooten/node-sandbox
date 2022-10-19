/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    // Reverse the first k characters for every 2k characters.

    // Slice s into 2k length segments
    const characters = s.split('');
    const slices = [], sliceLength = k * 2;
    let index = 0;
    while (characters.length > 0) {
        slices.push(characters.splice(0, sliceLength));
    }
    const result = [];
    // Iterate over the slices.
    for (const slice of slices) {
        if (slice.length < k) {
            // Fewer than k characters remain, reverse them all.
            result.push(slice.reverse().join(''));
        } else {
            // Full slice
            result.push(slice.splice(0, k).reverse().join(''));
            result.push(slice.join(''));
        }
    }

    return result.join('');
};
const s = "abcdefg", k = 2;
const result = reverseStr(s, k);
console.log('!');