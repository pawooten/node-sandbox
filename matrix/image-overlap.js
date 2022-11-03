/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
 var largestOverlap = function(img1, img2) {

    // Determine the lowest orphan count horizontal shifts by shifting all the way left once move at a time.
    let bestHorizontalSets = [img1], lowestSetOrphanCount = getColumnOrphanCount(img1, img2), count, current = img1, currentOrphanCount;
    for (count = img1.length; count > 0; count--) {
        current = slideLeft(current);
        currentOrphanCount = getColumnOrphanCount(current, img2);
        if (currentOrphanCount === lowestSetOrphanCount) {
            // This horizontal shifting of img1 matches our best thus far for lowest oprhan count,
            // so add it to the array for future processing
            bestHorizontalSets.push(current);
        }
        if (currentOrphanCount < lowestSetOrphanCount) {
            // This horizontal shifting of img1 is better than any we've seen thus far! Dump any old results and save this one.
            lowestSetOrphanCount = currentOrphanCount;
            bestHorizontalSets = [ current ];
        }
    }

    // Reset current back to the original state
    current = img1;
    for (count = img1.length; count > 0; count--) {
        current = slideRight(current);
        currentOrphanCount = getColumnOrphanCount(current, img2);
        if (currentOrphanCount === lowestSetOrphanCount) {
            // This horizontal shifting of img1 matches our best thus far for lowest orphan count. Add it to the array for future processing.
            bestHorizontalSets.push(current);
        }
        if (currentOrphanCount < lowestSetOrphanCount) {
            // This horizontal shifting of img1 is better than any we've seen thus far! Dump any old results and save this one.
            lowestSetOrphanCount = currentOrphanCount;
            bestHorizontalSets = [ current ];
        }
    }

    // Slide left and right determining the horizontal transformations that result in the fewest ones in either array which is in a column by itself.
    // Slide up and down to determine the largest overlap.

    // Shift img1 left 1 to n times, determining the lowest orphaned 1 count.
    
    return 0;
};

const slideLeft = (img) => {
    const result = [];
    for (const row of img) {
        result.push([...row.slice(1), 0]);
    }
    return result;
}

const slideRight = (img) => {
    const result = [];
    for (const row of img) {
        result.push([0, ...row.slice(0, row.length - 1)]);
    }
    return result;
}

const slideUp = (img) => {
    const result = [], length = img.length;
    for (let rowIndex = 1; rowIndex < length; rowIndex++) {
        result.push(img[rowIndex]);
    }
    result.push((new Array(img[0].length)).fill(0));
    return result;
};

const slideDown = (img) => {
    const result = [], length = img.length - 1;
    result.push((new Array(img[0].length)).fill(0));
    for (let rowIndex = 1; rowIndex < length; rowIndex++) {
        result.push(img[rowIndex]);
    }
    return result;
};

const getOverlapScore = (img1, img2) => {
    let score = 0;
    const rowCount = img1.length, columnCount = img1[0].length;
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            if (img1[rowIndex][columnIndex] === 1 && img2[rowIndex][columnIndex] === 1) {
                score += 1;
            }
        }
    }
    return score;
};

const getColumnOrphanCount = (img1, img2) => {
    let orphanCount = 0, img1Count, img2Count;
    const length = img1.length;
    for (let columnIndex = 0; columnIndex < length; columnIndex++) {
        img1Count = 0;
        img2Count = 0;
        for (let rowIndex = 0; rowIndex < length; rowIndex++) {
            img1Count += img1[rowIndex][columnIndex];
            img2Count += img2[rowIndex][columnIndex];
        }
        orphanCount += Math.abs(img1Count - img2Count);
    }

    return orphanCount;
}

const img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]];
const result = largestOverlap(img1, img2);
console.log('!');