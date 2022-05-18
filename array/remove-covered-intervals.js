/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var removeCoveredIntervals = function(intervals) {
    // Remove all intervals within the array that are covered by another interval in the list. Return the number of remaining intervals

    // Iterate over all intervals, copy unique intervals as they are encountered.
    let uniqueIntervals = [];
    intervals.forEach((interval, index) => {
        // Does this interval cover any of the unique intervals we've already encountered?
        uniqueIntervals = uniqueIntervals.filter(uniqueInterval => !isCovered(uniqueInterval, interval));
        // Is this interval covered by any of the unique intervals we've already encountered?
        if (uniqueIntervals.every(uniqueInterval => !isCovered(interval, uniqueInterval) )) {
            // This interval isn't covered by any of the unique intervals we've encountered thus far. so it should be added to the list
            uniqueIntervals.push(interval);
        }
    });
    return uniqueIntervals.length;
};
/**
 * 
 * @param {*} first 
 * @param {*} second 
 * @returns True if the first interval is covered by the second interval, otherwise false.
 */
const isCovered = function(first, second) {
    return second[0] <= first[0]  && first[1]  <= second[1];
}
const  intervals = [[1,4],[3,6],[2,8]];
const result = removeCoveredIntervals(intervals);
console.log('!');