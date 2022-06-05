/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    // Return the fewest number of coins that you need to make up the specified amount.
    // If the amount cannot be made up by any combination of the coins, return -1.

    // Sort the coins from largest to smallest.
    coins.sort((left, right) => right - left);
    const coinLength = coins.length;
    let coinCount = 0, currentSum = 0, remainder = amount - currentSum;

    // Iterate over each coin from largest to smallest.
    for (let index = 0; index < coinLength && remainder > 0; index++) {
        let coinValue = coins[index];
        // If the value of a single coin exceeds the remainder, we can't use that coin and must move on to the next smallest coin
        if (coinValue <= remainder) {
            // We can add at least one coin of this value to our sum without exceeding the target amount.
            let currentCoinCount = Math.floor(remainder / coinValue);
            remainder %= coinValue;
            coinCount += currentCoinCount;
            currentSum += coinValue * currentCoinCount;
        }
    }
    if (remainder === 0) {
        return coinCount;
    }
    return -1;
};
const coins = [186, 419, 83, 408], amount = 6249;
const result = coinChange(coins, amount);
console.log('!');