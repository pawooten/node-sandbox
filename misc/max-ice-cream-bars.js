/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    // Sort the array of ice cream bar costs from least expensive to most expensive.
    costs.sort((left, right) => left - right);
    let barCount = 0, index = 0, currentCost;
    while (coins > 0) {
        currentCost = costs[index];
        if (coins >= currentCost) {
            // We can afford this ice cream bar, so we buy it.
            barCount++;
            coins -= currentCost;
            index++;
        } else {
            // We can't afford this ice cream bar, and since we sorted by smallest to largest, we can't afford any additional ice cream bars.
            return barCount;
        }
    }

    return barCount;
};

const costs = [1,6,3,1,2,5], coins = 20;
const result = maxIceCream(costs, coins);
console.log('!');