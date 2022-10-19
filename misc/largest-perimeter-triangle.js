/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
    // Return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths.
    // If it is impossible to form any triangle of a non-zero area, return 0.

    // The perimeter of a triangle composed of three line segments whose lengths are values of nums is the sum of the length of each line segment.
    
    // Sort so that highest values are first. We want the maximum perimeter, so we should try to compose triangles of the longest line segments.
    nums.sort((left, right) => left - right);
    let a, b, c;
    for (let index = nums.length - 1; index >= 2; index--) {
        a = nums[index - 2], b = nums[index-1], c = nums[index];
        // You can compose a triangle if the sum of two sides is greater than the third.
        if (a + b > c) {
            return a + b + c;
        }
    }
    return 0;
};
const nums = [2,1,2];
const result = largestPerimeter(nums);
console.log('!');