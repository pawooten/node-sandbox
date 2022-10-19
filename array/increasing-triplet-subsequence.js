/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const increasingTriplet = (nums) => {
    let c1 = Number.MAX_VALUE, c2 = Number.MAX_VALUE;
    for (const x of nums) {
        if (x <= c1) {
            c1 = x;         
        } else {
            if (x <= c2) {
                c2 = x;
            } else {
                return true;  
            }
        }
    }
    return false;
};
const nums = [20,100,10,12,5,13];
const result = increasingTriplet(nums);
console.log('!');