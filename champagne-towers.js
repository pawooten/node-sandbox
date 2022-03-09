/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
 var champagneTower = function(poured, query_row, query_glass) {
    // The 1st row of the tower has 1 glass, the second row has 2, and so on until the 100th row. Each glass holds one cup of champagne
    // return how full the jth glass in the ith row is

    // Build a tree modeling the champagne glasses in this simulation.
    const treeObject = buildTree();

    // "Pour" each cup of champagne one cup at a time into the top most cup of the tree.
    for (let cupCount = 0; cupCount < poured; cupCount++) {
        
        // treeObject.head is an array which contains one or more glasses. treeObject.head should point to the highest row of the tree that contains
        // empty glasses, as pouring into rows above won't change the outcome.

        // If this row has three glasses, it's "child count" is four, because the above row has two glasses, and each has two children 
        // ( the middle glass is a child of both parent glasses).
        switch (treeObject.head.length) {
            case 1:
                // There's only one glass, all the champagne goes into it.
                pour(treeObject.head[0], 1, cupCount);
                break;
            case 2:
                pour(treeObject.head[0], 0.5, cupCount);
                pour(treeObject.head[1], 0.5, cupCount);
                break;
            default:
                let headChildCount = treeObject.head.length + 1;
                let edgeSpillAmount = 1 / headChildCount;
                // Glasses which are not on the edge of the tree have two parent glasses in the above row
                let middleSpillAmount = edgeSpillAmount * 2;
                for (let index = 0; index < treeObject.head.length; index++) {
                    let spillAmount = (index === 0 || index == treeObject.head.length - 1) ? edgeSpillAmount : middleSpillAmount;
                    pour(treeObject.head[index], spillAmount, cupCount);
                }
                break;
        }

        // After each cup of champagne we pour, look for rows of the tree where each cup is completely full
        // On subsequent pours, all champagne poured will spill past these rows since they're already filled to the brim.

        let hasEmptyGlasses = false;
        for (let rowIndex = treeObject.grid.indexOf(treeObject.head); rowIndex < treeObject.grid.length && !hasEmptyGlasses; rowIndex++) {
            hasEmptyGlasses = treeObject.grid[rowIndex].some(glass => glass.champagneAmount < 1);
            if (hasEmptyGlasses) {
                treeObject.head = treeObject.grid[rowIndex];
            }
        }
    }
    return treeObject.grid[query_row][query_glass].champagneAmount;
};

/** 
 * Pour one cup of champagne into the top glass.
 * @param {glass} points to a glass of the tree which champagne should be poured into.
 * @param {champagneAmount} the amount of champagne which is being poured */
const pour = function(glass, champagneAmount, cupCount) {
    if (!glass) {
        return; // Champagne that spills out of glasses on the last row (which don't have child glasses) spills onto the floro
    }
    // Add the champagne to the glass. If the glass already contains some champagne, some (or all) may spill into child glasses.
    glass.champagneAmount += champagneAmount;
    if (glass.champagneAmount > 1) {
        // This glass must have contained some champagne already, because after adding the amount received as a parameter, the amount
        // of champagne exceeds the capacity of the glass.
        let spillChampagne = glass.champagneAmount - 1;
        glass.champagneAmount = 1;

        // Children glasses exist (this glass isn't on the bottom row of the tree), so divide the spill amount between the two children glasses. 
        let childSpillChampagneAmount = spillChampagne / 2;
        console.log(`cup count: ${cupCount} child spill amount: ${childSpillChampagneAmount}`);
        pour(glass.leftChild, childSpillChampagneAmount, cupCount);
        pour(glass.rightChild, childSpillChampagneAmount, cupCount);
    }
}

const buildTree = function() {
    let grid = [];
    let currentRow, previousRow = null;
    for (let rowIndex = 100; rowIndex >= 0; rowIndex--) {
        previousRow = currentRow;
        currentRow = [];
        for (let glassIndex = 0; glassIndex < rowIndex; glassIndex++) {
            let leftChild = null, rightChild = null;
            if (previousRow) {
                // A previous Row exists, so we have children to attach
                leftChild = previousRow[glassIndex];
                rightChild = previousRow[glassIndex + 1];
            }
            let node = { 'rowIndex': rowIndex - 1, 'glassIndex': glassIndex, 'leftChild': leftChild, 'rightChild': rightChild, 'champagneAmount': 0 };
            currentRow.push(node);
        }
        if (currentRow .length > 0) {
            grid = [currentRow, ...grid];
        }
    }
    return {
        'head': previousRow,
        'grid': grid
    };
}
const poured = 100000009, query_row = 33, query_glass = 17
const result = champagneTower(poured, query_row, query_glass);
console.log('!');