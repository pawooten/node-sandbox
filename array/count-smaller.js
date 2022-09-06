/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var countSmaller = function(nums) {
    let results = [];
    const length = nums.length;
    let numMap = new Map();
    for (let index = length; index >= 0; index--) {
        let num = nums[index];
        buildNumMap(numMap, num);

        // Sum all counts in the numMap whose key is less than num.
        let numResult = 0;
        numMap.forEach((mapCount, mapKey) => {
            if (mapKey < num) {
                numResult += mapCount;
            }
        });
        results.unshift(numResult);
    }
    results.pop();
    return results;
};

const buildNumMap = function(numMap, num) {
    // Assume numMap contains the counts of all numbers to the right of index
    let count = 1;
    if (numMap.has(num)) {
        count += numMap.get(num);
    }
    numMap.set(num, count);
}

const nums = [5,2,6,1];
const result = countSmaller(nums);
console.log('!');