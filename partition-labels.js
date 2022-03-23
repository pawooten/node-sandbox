/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    // partition the string into as many parts as possible so that each letter appears in at most one part.
    // Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
    // return a list of integers representing the size of these parts.
    const characters = s.split('');

    // Determine the minimum index and maximum index of each occurence of each character in the string.
    // This span of the array must define or be contained within a part of the split array (since the rule is all
    // occurences of a character must appear in the same part).
    let indexMap = new Map();
    for (let index = 0; index < characters.length; index++) {
        let char = characters[index];
        if (!indexMap.has(char)) {
            indexMap.set(char, { min: index, max: index});
        }
        let indexObject = indexMap.get(char);
        indexObject.min = Math.min(indexObject.min, index);
        indexObject.max = Math.max(indexObject.max, index);
    }
    let sortedIndexObjects = [...indexMap.entries()].sort( (indexObjectA, indexObjectB) => indexObjectA.min < indexObjectB.min);
    let parts = [];
    for (index = 0; index < sortedIndexObjects.length; index++) {
        let indexObject = sortedIndexObjects[index][1];
        // Is span contained within an existing part?
        if (parts.some(part => contains(part, indexObject))) {
            // This part is completely contained by an existing part, move on, no extension or new part need
            continue;
        }
        // Is span intersect (and thus extend) an existing part? (should only ever be the previous part, because we sorted?)
        let part = parts.find(part => intersect(part, indexObject));
        if (part) {
            part.max = indexObject.max;
            continue;
        }
        // This span isn't contained by an existing part and doesn't intersect with an existing part, so we must create a part to contain it
        parts.push(indexObject);
    }

    return parts.map(part => part.max + 1 - part.min);
};
const contains = function(part, span) {
    // not sanity checking the min < max for either part or span
    return (span.min >= part.min && span.max <= part.max);
}
const intersect = function(a, b) {
    return ((b.min >= a.min && b.min <= a.max) || (b.max >= a.min && b.max <= a.max));
}
const s = "eccbbbbdec";
const result = partitionLabels(s);
console.log('!');