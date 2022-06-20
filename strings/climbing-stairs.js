/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // It takes n steps to reach the top of the staircase.
    // Each time you can either climb 1 or 2 steps. Return the number of distinct ways you can climb to the top.

    // const recordKeeper = { pathCount: 0 };
    // walkPath(0, n, recordKeeper);
    // return recordKeeper.pathCount;

    let array = [1, 2, 3];
    while (array.length < n) {

    }
};
// const walkPath = function(stepIndex, n, recordKeeper) {
//     if (stepIndex === n) {
//         // We've reached n!
//         recordKeeper.pathCount++;
//         return;
//     }
//     if (stepIndex > n) {
//         // We've overshot n, and this is not a valid path.
//         return;
//     }
//     // We haven't reached n yet.
//     walkPath(stepIndex + 1, n, recordKeeper);
//     walkPath(stepIndex + 2, n, recordKeeper);
// }
const n = 3;
const result = climbStairs(n);
console.log('!');