/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function(matchsticks) {
    // matchsticks[i] is the length of the ith matchstick. Return true if you can divide the matchsticks into four sets whose sums are equal (regardless of the number of items).

    if (matchsticks.length < 4) {
        // It is impossible to make a square out of this set of matchsticks, as we don't even have enough matchsticks for one per side of the square.
        return false;
    }

    // Calculate the sum of the lengths of all matchsticks.
    let sum = matchsticks.reduce((previous, current) => previous + current, 0);
    if (sum % 4 != 0) {
        // The sum of the length of each match stick isn't evenly divisble by four, which means it is impossible to divide the matchsticks into four sets whose sums are equal.
        return false;
    }

    // Sort the array in descending order
    matchsticks.sort((left, right) => right - left);
    
    
    const sides = Array(4).fill(0);

    function dfs(index, target) {
        if (index > matchsticks.length - 1) {
            return true;
        }

        const seen = new Set();
        
        for (let i = 0; i < 4; i++) {
            if (sides[i] + matchsticks[index] > target || seen.has(sides[i])) {
                // Adding the current matchstick to the current side will cause the sum of that side to exceed the target (one quarter of the sum of all matchsticks), or
                continue;
            }
            seen.add(sides[i]);
            sides[i] += matchsticks[index];

            if (dfs(index + 1, target)) {
                return true;
            }

            sides[i] -= matchsticks[index];
        }

        return false;
    }

    return dfs(0, sum / 4);
};
const matchsticks = [1,1,2,2,2];
const result = makesquare(matchsticks);
console.log('!');