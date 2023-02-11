/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const endIndex = nums.length - 1;
    if (endIndex === 0) {
        return true;
    }
    let endReached = false;

    const walk = (currentIndex) => {
        let jump = nums[currentIndex];
        if (currentIndex + jump >= endIndex) {
            endReached = true;
            return;
        }
        while (jump > 0 && !endReached) {
            walk(currentIndex + jump);
            jump--;
        }
    };
    walk(0);
    return endReached;
};

const nums = [2,5,0,0];
const result = canJump(nums);
console.log('!');
