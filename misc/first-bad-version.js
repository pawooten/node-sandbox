/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // start in the middle of the array
        let keepLooking = true, index = Math.floor(n.length / 2);
        while (keepLooking) {
            if (isBadVersion(index)) {
                // This version is bad. It may or may not be the first bad version
                if (index === 0) {
                    // This is the first bad index, because its the first version in the array.
                    keepLooking = false;
                } else {
                    if (index === 1) {
                        // This is the 2nd version in the array. Is the first version bad?
                        if (isBadVersion(index - 1)) {
                            // The first version in the array is bad.
                            index = 0;
                            keepLooking = false;
                        } else {
                            // The 2nd version in the array is bad but the first isn't.
                            keepLooking = false;
                        }
                    } else {
                        // This index is bad, but it isn't the first or second version in the array, 
                    }
                }
            } else {
                // This version is good. Keep looking for a bad version.
                const delta = Math.floor((n.length - index) / 2);
                if (delta === 0) {
                    
                }
            }    
        }
    };
};
const n = 5, bad = 4;
const result = isBadVersion(n);
console.log('!');