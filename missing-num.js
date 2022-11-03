/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    nums.sort((left, right) => left - right);
    let expectedNum = 1, currentNum, missingNum, duplicatedNum;
    const length = nums.length;
    for (let index = 0; index < length; index++) {
        currentNum = nums[index];
        if (expectedNum != currentNum) {
            missingNum = expectedNum;
            // The duplicated num may either precede or follow the missing num.
            if (nums[index - 1] === currentNum) {
                duplicatedNum = nums[index - 1];
            } else {
                duplicatedNum = nums[index + 1];
            }
            return [duplicatedNum, missingNum];
        } else {
            expectedNum += 1;
        }
    }
};

const nums = [1,1];
const result = findErrorNums(nums);
console.log('!');