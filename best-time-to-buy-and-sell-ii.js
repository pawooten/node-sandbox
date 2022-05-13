/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // prices[i] is the price of a given stock on the ith day.
    // On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time
    // However, you can buy it then immediately sell it on the same day.
    // Find and return the maximum profit you can achieve.

    // Determine which indices correspond to days when it would be profitable to sell and which indices correspond
    // to days when it would be profitable to buy    
    const length = prices.length;
    let buyIndices = [], sellIndices = [];
    for (let index = 0; index < length - 1; index++) {
        if (prices[index] < prices[index + 1]) {
            // The price is increasing tomorrow, it would be good to buy today
            buyIndices.push(index);
        } else {
            // The price is decreasing tomorrow, it would be good to sell today
            sellIndices.push(index);
        }
    }
    
    let profit = 0, boughtIndex = -1;
    // Iterate through the days 
    for (let index = 0; index < length; index++) {
        if (boughtIndex === -1) {
            // We don't currently own the share
            if (buyIndices.includes(index)) {
                // Today is a good day to buy, so buy it
                boughtIndex = index;
            }
        } else {
            // We own the share. Determine the best day to sell between now and the next buy day, or the end
            
            // if (sellIndices.includes(index)) {
            //     // Today is a good day to sell, but is it the best day to sell?
            //     if (buyIndices.indexOf(boughtIndex) === buyIndices.length - 1) {
            //         // There are no additional days to buy 
            //     }
            //     profit += prices[index] - prices[boughtIndex];
            //     boughtIndex = -1;
            // }
        }
    }
    return profit;
};
const prices = [1,2,3,4,5];
const result = maxProfit(prices);
console.log('!');