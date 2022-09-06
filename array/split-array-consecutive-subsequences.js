/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isPossible = function(nums) {
    // Populate a map whose keys are unique num values and whose values are the counts of that num in the nums array.
    let numsMap = new Map();
    nums.forEach(num => {
        if (!numsMap.has(num)) {
            numsMap.set(num, 0);
        }
        numsMap.set(num, numsMap.get(num));
    });

    // Extract and sort the set of unique nums from the numsMap.
    let unqiueNums = [...numsMap.keys()].sort((left, right) => left - right);

    // Iterate through the each unique num. If we can create a subsequence of three or more adjacenet numbers for each instance
    // of the number continue on to the next.
    const length = unqiueNums.length;
    for (let index = 0; index < length; index++) {
        let uniqueNum = unqiueNums[index];
        while (numsMap.get(uniqueNum) > 0) {
            // Remove an instance of the current uniqueNum from the map
            numsMap.set(uniqueNum, numsMap.get(uniqueNum) - 1);
            let currentSet = [ uniqueNum ];
            let isValidSubsequence = true;
            while (isValidSubsequence) {
                let currentValue = currentSet[currentSet.length - 1]; + 1;
                if (numsMap.get(currentValue) > 0) {
                    // We have at least one instance of this number and can continue the subsequence. Remove an instance from the map,
                    // add it to the current set and continue processing.
                    numsMap.set(currentValue, numsMap.get(currentValue) - 1);
                    currentSet.push(currentValue);                    
                } else {
                    // We cannot continue the subsequence. Is the current set large enough to be valid?
                    if (currentSet.length > 2) {
                        // This set is large enough to be valid.
                        currentSet = [currentValue]
                    }
                }
            }
        }
    }
};

const nums = [1,2,3,3,4,4,5,5];
const result = isPossible(nums);
console.log("!");
