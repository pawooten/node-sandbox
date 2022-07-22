 /**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 2) {
        return n;
    }
    return _climbStairs(n, 1, 2);
}

const _climbStairs = function(n, previous, current) {
    if (n === 2) {
        return current;
    }

    return _climbStairs(n - 1, current, previous + current);
}

 const n = 6;
 const result = climbStairs(n);
 console.log('!');