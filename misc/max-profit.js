/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let maxProfit = 0, lowestBuyPrice = Number.MAX_VALUE;

    // Iterate over each price, looking for the lowest price as we go.
    const length = prices.length;
    for (let index = 0; index < length; index++) {
        let currentPrice = prices[index];
        if (currentPrice < lowestBuyPrice) {
            lowestBuyPrice = currentPrice;
        }

        // Determine the profit if we sold today
        let profit = currentPrice - lowestBuyPrice;
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
};
const prices = [7,1,5,3,6,4];
const result = maxProfit(prices);
console.log('!');