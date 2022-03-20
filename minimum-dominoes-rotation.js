/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
 var minDominoRotations = function(tops, bottoms) {
    // tops[i] and bottoms[i] represent the top and bottom havels of the ith domino.
    // We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.
    // return the minimum number of rotations so that all the values in tops are the same or
    // all the values in bottoms are the same.
    // if it cannot be done, return -1.

    // Is it easier to rotate tiles such that all top values are the same, or to rotate such that all
    // bottom values are the same? Count the values in tops and bottoms.
    let topValueCountByValue = new Map();
    tops.forEach(top => {
        if (!topValueCountByValue.has(top)) {
            topValueCountByValue.set(top, 0);
        };
        let topCount = topValueCountByValue.get(top);
        topValueCountByValue.set(top, ++topCount);
    });
    let bottomValueCountByValue = new Map();
    bottoms.forEach(bottom => {
        if (!bottomValueCountByValue.has(bottom)) {
            bottomValueCountByValue.set(bottom, 0);
        }
        let bottomCount = bottomValueCountByValue.get(bottom);
        bottomValueCountByValue.set(bottom, ++bottomCount);
    });

    const topValue = getMostCommonValue(topValueCountByValue);
    const bottomValue = getMostCommonValue(bottomValueCountByValue);
    const topMoves = getMovesForTop(tops, bottoms, topValue);
    const bottomMoves = getMovesForBottom(tops, bottoms, bottomValue);

    if (topMoves === -1 && bottomMoves === -1) {
        // Unsolvable
        return -1;
    }
    if (topMoves === -1) {
        return bottomMoves;
    }
    if (bottomMoves === -1) {
        return topMoves;
    }
    return Math.min(topMoves, bottomMoves);
};
const getMovesForTop = function(tops, bottoms, topValue) {
    let swapCount = 0;
    for (let index = 0; index < tops.length && swapCount != -1; index++) {
        if (tops[index] === topValue) {
            // No swapping needed for this domino, as the top value matches our target we are trying to swap all top values to equal.
            continue;
        }
        // Can we swap to make this top value match our target?
        if (bottoms[index] === topValue) {
            // Yes! We won't actually perform the swap, because we don't want to screw up the arrays when scoring the number of swaps
            // to make the bottom row match.
            swapCount++;
        } else {
            // The current top value for this domino doesn't match our target, and swapping it won't result in a match either, we can't
            // make the top row of dominos match.
            swapCount = -1;
        }
    }
    return swapCount;
}
const getMovesForBottom = function(tops, bottoms, bottomValue) {
    let swapCount = 0;
    for (let index = 0; index < tops.length && swapCount != -1; index++) {
        if (bottoms[index] === bottomValue) {
            // No swapping needed for this domino, as the bottom value matches our target we are trying to swap all bottom values to equal.
            continue;
        }
        // Can we swap to make this top value match our target?
        if (tops[index] === bottomValue) {
            // Yes! We won't actually perform the swap, because we don't want to screw up the arrays when scoring the number of swaps
            // to make the bottom row match.
            swapCount++;
        } else {
            // The current top value for this domino doesn't match our target, and swapping it won't result in a match either, we can't
            // make the top row of dominos match.
            swapCount = -1;
        }
    }
    return swapCount;
}
const getMostCommonValue = function(map) {
    let resultCount = 0, resultValue = undefined;
    map.forEach((value, key) => {
        if (value > resultCount) {
            resultCount = value;
            resultValue = key;
        }
    });
    return resultValue;
}

const tops = [3,5,1,2,3], bottoms = [3,6,3,3,4];
const result = minDominoRotations(tops, bottoms);
console.log('!');