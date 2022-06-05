/**
 * @param {number[][]} envelopes
 * @return {number}
 */
 var maxEnvelopes = function(envelopes) {
    // envelopes[i] = [wi, hi], the width and height of the ith envelope
    // One envelope can fit within another iff the width and height of one enveloper are greater than the other's.
    // Return the maximum number of envelopes you can nest.

    // Iterate across each envelope, considering each one as the outer-most envelope of a nested set, to determine
    // all possible nested sets.

    let recordKeeper = { longestSet: [] };
    const length = envelopes.length;
    for (let index = 0; index < length; index++) {
        let envelope = envelopes[index];
        findNestedSets(envelopes, [ envelope ], recordKeeper);
    }
    return recordKeeper.longestSet.length;
};

const findNestedSets = function(envelopes, currentSet, recordKeeper) {
    if (currentSet.length > recordKeeper.longestSet.length) {
        recordKeeper.longestSet = currentSet;
    }
    // currentSet[0] is the outermost envelope of the set.
    let parentEnvelope = currentSet[currentSet.length - 1];
    const length = envelopes.length;
    for (let index = 0; index < length; index++) {
        let envelope = envelopes[index];
        if (envelopeFits(parentEnvelope, envelope)) {
            findNestedSets(envelopes, [...currentSet, envelope], recordKeeper);
        }
    }
}
const envelopeFits = function(parent, child) {
    return parent[0] > child[0] && parent[1] > child[1];
}


const envelopes = [[5,4],[6,4],[6,7],[2,3]];
const result = maxEnvelopes(envelopes);
console.log('!');