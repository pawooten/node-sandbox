/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
 var maximumScore = function(nums, multipliers) {
    const keeper = { maxScore: 0 };
    nextScore(0, nums, 0, nums.length - 1, multipliers, 0, keeper);

    return keeper.maxScore;
};

const nextScore = (score, nums, numsStart, numsEnd, multipliers, multiplierIndex, keeper) => {
    const multiplierLength = multipliers.length, multiplier = multipliers[multiplierIndex];
    if ( multiplierIndex === multiplierLength) {
        return;
    }
    if (multiplierIndex === multiplierLength - 1) {
        // This is the only remaining multiplier in the array
        if (numsEnd - numsStart > 0) {
            // At least two numbers remain. Computer the score resulting from selecting either.
            keeper.maxScore = Math.max(keeper.maxScore, score + nums[numsStart] * multiplier);
            keeper.maxScore = Math.max(keeper.maxScore, score + nums[numsEnd] * multiplier);
        } else {
            // There is no choice between first and last numbers, there is only one remaining.
            keeper.maxScore = Math.max(keeper.maxScore, score + nums[numsStart] * multiplier );
        }
    } else {
        // We must explore both options: choosing the first element and choosing the last element
        // Explore the possible scores of choosing the first element.
        nextScore(score + nums[numsStart] * multiplier, nums, numsStart + 1, numsEnd, multipliers, multiplierIndex + 1, keeper);

        // Explore the possible scores of choosing the last element.
        nextScore(score + nums[numsEnd] * multiplier, nums, numsStart, numsEnd - 1, multipliers, multiplierIndex + 1, keeper);
    }
};

const nums = [1,2,3], multipliers = [3,2,1];
const result = maximumScore(nums, multipliers);
console.log('!');