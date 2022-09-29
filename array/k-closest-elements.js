/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    // arr is a sorted array, k and x are integers. Return the k closest integers to x in the array. The result should also be sorted in ascending order.
    // An integer a is closer to x than an integer b if abs(a-x) < abs(b-x) || abs(a-x) == abs(b-x) and a < b

    // "a is closer to x than b if the absolute value of the difference between a and x is less than b and x, or, if the absolute value of the differences is the same and a < b"

    // Find the closest integer in the array to x. Does arr contain x itself?
    const length = arr.length;
    // Assume the first value in the array is the closest to x, although it probably isn't.
    let closestIndex = 0, closestValue = arr[closestIndex];
    for (let index = 1; index < length; index++) {
        let current = arr[index];
        if (AisCloser(current, closestValue, x)) {
            // The current value is closer than our currently known closest value, so we have a new champ.
            closestIndex = index;
            closestValue = current;
        }
    }

    let result = [closestValue];
    k--;
    let leftOffset = 1, rightOffset = 1;
    while (k > 0) {
        if (closestIndex - leftOffset >= 0) {
            // A left adjacent value exists. Does a right one exist?
            if (closestIndex + rightOffset >= length) {
                // No right adjacent value exists, so just add the left adjacent value.
                result.push(arr[closestIndex - leftOffset]);
                leftOffset++;
            } else {
                // Both a left and right adjacent values exists, so we must add the closest one this iteration.
                let leftValue = arr[closestIndex - leftOffset], rightValue = arr[closestIndex + rightOffset];
                if (AisCloser(leftValue, rightValue, x)) {
                    result.push(leftValue);
                    leftOffset++;
                } else {
                    result.push(rightValue);
                    rightOffset++;
                }
            }
        } else {
            // No left adjacent values exist, so just add the right adjacent value
            result.push(arr[closestIndex + rightOffset]);
            rightOffset++;
        }
        k--;
    }

    return result.sort((left, right) => left - right);
};

const AisCloser = (a,b, x) => {
    let aOffset = Math.abs(a - x), bOffset = Math.abs(b - x);
    if (aOffset < bOffset) {
        return true;
    }
    if (aOffset === bOffset && a < b) {
        return true;
    }
    return false;
};

const arr = [1,2,3,4,5], k = 4, x = 3;
const result = findClosestElements(arr, k, x);
console.log('!');