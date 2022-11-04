/**
 * @param {string[]} nums
 * @return {string}
 */
 var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    let numsSet = new Set(nums);
    let binary, counter = 0;
    do {
        binary = counter.toString(2).padStart(n,'0');
        if (!numsSet.has(binary)) {
            return binary;
        }
        counter++;
    } while (binary.length === n);

};

const nums = ["01","10"];
const result = findDifferentBinaryString(nums);
console.log('!');