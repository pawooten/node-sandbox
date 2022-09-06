/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    let flatList = [];
    const n = matrix.length;
    for (let index = 0; index < n; index++) {
        flatList.push(...matrix[index]);
    }
    flatList.sort((left, right) => left - right);
    return flatList[k - 1];
};

const matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8;
const result = kthSmallest(matrix, k);
console.log('!');