/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {

    const get1Count = (value) => value.toString(2).split('').filter(v => v === '1').reduce((previous, current) => previous + current, 0);
    const countMap = new Map();
    const getCount = (value) => {
        let count;
        if (!countMap.has(value)) {
            count = get1Count(value);
            countMap.set(value, count);
        } else {
            count = countMap.get(value);
        }
        return count;
    }; 
    return arr.sort((left, right) => {
        let left1Count = getCount(left), right1Count = getCount(right);
        if (left1Count === right1Count) {
            return left - right;
        }
        return left1Count - right1Count;
    });
};

const arr = [0,1,2,3,4,5,6,7,8];
const result = sortByBits(arr);
console.log('!');