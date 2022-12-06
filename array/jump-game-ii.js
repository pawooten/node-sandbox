/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    const lastIndex = nums.length - 1;
    let record = Number.MAX_SAFE_INTEGER;
    const recursiveJump = (index, jumpCount) => {
        if (index === lastIndex) {
            // We've reached the last index. Did we set a record?
            record = Math.min(record, jumpCount);
            return;
        }
        // Explore each option, from jumping the maximum number of indices we can, all the way down to jumping forward only a single index.
        for (let jumpLength = nums[index]; jumpLength > 0; jumpLength--) {
            recursiveJump(index + jumpLength, jumpCount + 1);
        }
    };
    recursiveJump(0, 0);
    return record;
};

const nums = [2,3,0,1,4];
const result = jump(nums);
console.log('!');