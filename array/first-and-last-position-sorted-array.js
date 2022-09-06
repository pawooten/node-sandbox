/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let lowIndices = new Set(), highestLowIndex, highIndices = new Set(), lowestHighIndex;
    let unsolvable = false, targetFound = false, index = Math.floor(nums.length / 2);
    while (!unsolvable && !targetFound) {
        // If we are searching an index we've already visited, their is no solution.
        unsolvable = lowIndices.has(index) || highIndices.has(index);

        let currentNum = nums[index], max, min, delta;
        targetFound = target === currentNum;
        if (!targetFound) {
            if (currentNum < target) {
                // The currentNum is less than the target, so save it's index for subsequent optimization.
                lowIndices.add(index);
                if (highestLowIndex === undefined) {
                    highestLowIndex = index;
                }
                highestLowIndex = Math.max(highestLowIndex, index);
                // The next index to search should be half way between the current index and either the end of the array or the lowest known high index.
                max = lowestHighIndex;
                if (max === undefined) {
                    // There is no known lowest high index, so the maximum of the range we are halving should be the end of the array.
                    max = nums.length - 1;
                }
                delta = Math.floor((max - index) / 2);
                if (delta < 1) {
                    delta = 1;
                }
                index += delta;

            } else {
                // The currentNum is greater than the target, save it's index for subsequent optimization.
                highIndices.add(index);
                if (lowestHighIndex === undefined) {
                    lowestHighIndex = index;
                }
                lowestHighIndex = Math.min(lowestHighIndex, index);

                // The next index to search should be half way between the current index and either the beginning of the array or the highest known low index.
                min = highestLowIndex;
                if (min === undefined) {
                    // There is no known highest low index, so the minimum of the array we are halving should be the beginning of the array.
                    min = 0;
                }
                delta = Math.floor((index - min) / 2);
                if (delta < 1) {
                    delta = 1;
                }
                index -= delta;
            }
        }
    }

    if (!targetFound) {
        return [-1,-1];
    }

    // Target was found at the current value of index. 
    let left = index, right = index, leftDone = false, rightDone = false;
    while (!leftDone && !rightDone) {
        left--;
        if (nums[left] != target) {
            leftDone = true;
            left++;
        }
        right++;
        if (nums[right] != target) {
            rightDone = true;
            right--;
        }
    }

    return [left, right];
};
const nums = [1,2,3], target = 3;
const result = searchRange(nums, target);
console.log('!');