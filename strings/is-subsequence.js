/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    // return true if s is a sunsequence of t, otherwise false. a subsequence string is a new string that is formed from the original
    // string by deleting zero or more characters without disturbing the relative positions of the remaining characters.
    const sLength = s.length;
    if (t.length < sLength) {
        // It isn't possible to create a match by removing characters from t, because s is longer than t
        return false;
    }
    if (s === '') {
        // An empty string is guaranteed to be a subsequence of every candidate string
        return true;
    }

    s = s.split(''), t = t.split('');

    let match = false;
    do {
        match = true;
        // Interate, character by character, looking for a pair that do not match.
        for (let index = 0; index < sLength && index < t.length && match; index++) {
            if (s[index] !== t[index]) {
                // This character at t doesn't match the corresponding character in the candidate string, remove it.
                t.splice(index, 1);
                match = false;
            }
        }
        // Keep trying until we match the candidate or remove enough characters from t that a match becomes impossible.
    } while (!match);
    return match && sLength <= t.length;
};
const s = "bcd", t = "uuuuuuuuuuubcd";
const result = isSubsequence(s, t);
console.log('!');