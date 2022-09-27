/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    // Building the sets of every possible sub array of nums1 and every possible sub array of nums2 and finding the longest
    // intersect is probably too slow. How can we optimize some sub arrays

    const nums1Set = new Set(nums1), nums2Set = new Set(nums2);
    if (!nums1Set.size || !nums2Set.size) {
        // One or both of the arrays is empty, no sub arrays are repeated.
        return 0;
    }
    const nums1SubArrays = new Set([tokenize(nums1)]), nums1Length = nums1.length; // the entire array is a sub array of itself.
    let setSize = nums1.length - 1, currentSubset;
    while (setSize > 0) {
        for (let index = 0; index + setSize <= nums1Length; index++) {
            currentSubset = nums1.slice(index, index + setSize);
            if (currentSubset.some((subSetValue => !nums2Set.has(subSetValue)))) {
                // This subset cannot be repeated, because one or more of its values is missing from nums2.
                continue;
            } else {
                nums1SubArrays.add(tokenize(currentSubset));
            }
        }
        setSize--;
    }

    const nums2SubArrays = new Set([ tokenize(nums2) ]), nums2Length = nums2.length;
    setSize = nums2.length - 1;
    while (setSize > 0) {
        for (let index = 0; index + setSize <= nums2Length; index++) {
            currentSubset = nums2.slice(index, index + setSize);
            if (currentSubset.some((subSetValue => !nums1Set.has(subSetValue)))) {
                // This subset cannot be repeated, because one or more of its values is missing from nums1.
                continue;
            } else {
                nums2SubArrays.add(tokenize(currentSubset));
            }
        }
        setSize--;
    }

    let longestMatch = 0, currentToken;
    nums1SubArrays.forEach(nums1SubArray => {
        currentToken = tokenize(nums1SubArray);
        if (nums2SubArrays.has(currentToken)) {
            longestMatch = Math.max(longestMatch, nums1SubArray.length);
        }
    });
    return longestMatch;
};

const tokenize = (values) => {
    return values.reduce((previous, current) => `${previous}.${current}`);
}

const nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7];
const result = findLength(nums1, nums2);
console.log('!');