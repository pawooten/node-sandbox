/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaximumXOR = function(nums) {

    // not fast enough

    // return the maximum result of nums[i] XOR nums[j] where o <= i <= j < n
    // let max = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         let result = nums[i] ^ nums[j];
    //         max = Math.max(max, result);
    //     }
    // }
    // return max;

    // wrong
    // Compare the highest number in the array against each other number.
    // let max = 0, maxNumber = Math.max(...nums);
    // for (let i = 0; i < nums.length; i++) {
    //     max = Math.max(max, maxNumber ^ nums[i]);
    // }
    // return max;

    // Determine the set of numbers with the highest significant bit set
    let numsByPowerOfTwo = {};
    nums.forEach(num => {
        let power = 0;
        while (num > Math.pow(2, power)) {
            power += 1;
        }
        power -= 1;
        let powerNums = numsByPowerOfTwo[power] || [];
        powerNums.push(num);
        numsByPowerOfTwo[power] = powerNums;
    });
    return 0;
};
const nums = [14,70,53,83,49,91,36,80,92,51,66,70];
const result = findMaximumXOR(nums);
console.log('!');