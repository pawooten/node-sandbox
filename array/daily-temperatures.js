/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // All temperatures are integers, and negative temperatures are not allowed.
    const result = [], length = temperatures.length;
    let minimumWarmerTemperature, warmerDayFound;
    // Iterate over each temperature and determine the number of days since that day until a warmer day (or zero)
    for (let outerIndex = 0; outerIndex < length; outerIndex++) {
        minimumWarmerTemperature = temperatures[outerIndex] + 1;
        warmerDayFound = false;
        // Iterate over each remaining temperature looking for a warmer day.
        for (let innerIndex = outerIndex + 1; innerIndex < length; innerIndex++) {
            if (minimumWarmerTemperature <= temperatures[innerIndex]) {
                // We've found a temperature that is warmer!
                result.push(innerIndex - outerIndex);
                warmerDayFound = true;
                innerIndex = length;
            }
        }
        if (!warmerDayFound) {
            result.push(0);
        }
    }
    return result;
};

const temperatures = [30,40,50,60];
const result = dailyTemperatures(temperatures);
console.log('!');