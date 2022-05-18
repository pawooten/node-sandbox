/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
     let lastIndex = nums.length;
     for (let index = 0; index < lastIndex; index++) {
         if (nums[index] === val) {
             // this index contains our value and must be overwritten by the rest of the array (if any)
             let subIndex;
             for (subIndex = index + 1; subIndex < lastIndex; subIndex++) {
                if (nums[subIndex] != val) {
                    lastIndex--;
                    break;
                }
             }
             // swap the val to move it towards the end of the array.
             let temp = nums[subIndex];
             nums[subIndex] = val;
             nums[index] = temp;
         }
     }
     for (index = lastIndex; index < nums.length; index++) {
         nums[index] = 0;
     }
     return lastIndex;
};
const nums = 
[0,1,2,2,3,0,4,2], val = 2;
const result = removeElement(nums, val);
console.log('!');