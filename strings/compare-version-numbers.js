/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    // version numbers consist of one or more revisions joined by a dot '.', each revision consists of digits and may contain leading zeros
    // every revision contains at least one character. Revisions are 0-indexed from left to right with the leftmost revision being revision 0

    // return -1 if version1 < version2
    // return 1 if version1 > version2
    // otherwise return 0;

    const v1 = version1.split('.').map(vString => +vString);
    const v2 = version2.split('.').map(vString => +vString);
    const length = Math.min(v1.length, v2.length);
    for (let index = 0; index < length; index++) {
        if (v1[index] < v2[index]) {
            return -1;
        }
        if (v1[index] > v2[index]) {
            return 1;
        }
        // v1[index] must equal v2[index] to have not short circuited by this point, continue on to the next pair of revisions.
    }

    // Are the lengths of v1 and v2 mismatched? If so, it's possible their still may be a lesser version
    if (v1.length < v2.length) {
        // If any of the revisions that exist in v2 beyond the last revision of v1 are non-zero, v2 is greater and -1 should be returned.
        return v2.slice(v1.length).some(rev => rev > 0) ? -1 : 0;
    }
    if (v1.length > v2.length) {
        // If any of the revisions that exist in v1 beyond the last revision of v2 are non-zero, v1 is greater and 1 should be returned.
        return v1.slice(v2.length).some(rev => rev > 0) ? 1 : 0;
    }
    // v1.length and v2.length must be equal, and since we haven't short circuited, the versions are equal.
    return 0;
};
const version1 = "1.0.1", version2 = "1";
const result = compareVersion(version1, version2);
console.log('!');
