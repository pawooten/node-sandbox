/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    const length = arr.length;
    if (length < 3) {
        return false;
    }
    let isIncreasing = true, previous = -1, peakIndex;
    for (let index = 0; index < length; index++) {
        let current = arr[index];
        if (current === previous) {
            // Plateaus don't count
            return false;
        }
        if (isIncreasing) {
            if (current < previous) {
                // We've reached the peak!
                isIncreasing = false;
                peakIndex = index;
            }
        } else {
            if (current > previous) {
                return false;
            }
        }
        previous = current;
    }
    return peakIndex > 1 && peakIndex < length;
};
const arr = [9,8,7,6,5,4,3,2,1,0];
const result = validMountainArray(arr);
console.log('!');