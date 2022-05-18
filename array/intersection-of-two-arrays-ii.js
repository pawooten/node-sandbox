/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
     let map = new Map();
     nums1.forEach(num => {
        let count = map.has(num) ? map.get(num) : 0;
        count++;
        map.set(num, count);
    });
    let results = [];
    nums2.forEach(num => {
        if (map.has(num)) {
            let count = map.get(num);
            count--;
            (!count) ? map.delete(num) : map.set(num, count);
            results.push(num);
        }
    });
    return results;
 };
const nums1 = [1,2,2,1], nums2 = [2,2];
const result = intersect(nums1, nums2);
console.log('!');