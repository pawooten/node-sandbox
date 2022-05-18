/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
     let length = nums.length;
    // iterate through the array. As we encounter instances of val, shift the remainder of the array left once overwriting that instance of val    
     for (let index = 0; index < length; index++) {
        if (nums[index] === val) {
            // Shift
            for (let subIndex = index; subIndex < length - 1; subIndex++) {
                nums[subIndex] = nums[subIndex + 1]
            }
            index--;
            length--;
        }
     }
    return length;
 }
 const nums = [0,1,2,2,3,0,4,2], val = 2;
 const result = removeElement(nums, val);
 console.log('!');