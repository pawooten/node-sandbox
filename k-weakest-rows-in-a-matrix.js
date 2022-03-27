/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    // m x n matrix mat of 1 (soldier) or 0 (civilian).
    // The soliders are positioned in front of the civilians, that is, all 1's will apepar to
    // the left of all the 0's in each row.
    // A row i is weaker than a row j if one of the following is true:
    // the number of soliders in row i is less than the number of soliders in row j
    // both rows have the same numbers of soliders and i < j.

    // Return the indices of the k weakest rows of the matrix ordered from weakest to strongest
    
    // Attach the current index of each row, since sorting rows will change the indices.
    mat.forEach((row, index) => row.trueIndex = index);

    // Sort the array, ordering by weakest row to strongest row.
    mat.sort((rowA, rowB) => {
        let rowACount = solidersPerRow(rowA);
        let rowBCount = solidersPerRow(rowB);
        let difference = rowACount - rowBCount;
        if (!difference) {
            return mat.indexOf(rowA) - mat.indexOf(rowB);
        }
        return difference;
    });

    let weakRowIndices = [];
    for (let counter = 0; counter < k; counter++) {
        let currentWeakestRow = mat.splice(0, 1);
        weakRowIndices.push(currentWeakestRow[0].trueIndex);
    }
    return weakRowIndices;
};
const solidersPerRow = function(row) {
    let count = 0;
    for (let index = 0; index < row.length; index++) {
        if (row[index]) {
            count++;
        } else {
            // We've encountered a civilian, short circuit, because no soliders should follow civilians
            index = row.length;
        }
    }
    return count;
}
const mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2;
const result = kWeakestRows(mat, k);
console.log('!');