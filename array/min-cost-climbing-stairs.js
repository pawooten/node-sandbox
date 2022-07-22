/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    // cost[i] is the cost of the ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

    // Rather than allowing cost[i] to continue to describe the (incremental) cost of each step of the staircase, repurpose
    // costs to describe the lowest cummulative cost of reaching that step from either step 0 or step 1.
    // Following this approach, the minimum cummulative cost of reaching the last step of the staircase is our solution.

    // Skip the first two elements of the array, because the player is allowed to start at index 0 or index 1, and the cummulative cost of either
    // option is whatever the incremental cost of that step is (since it's the first one the user steps on)

    // Push an empty step to the end of the cost array to represent reaching the top of the staircase.
    cost.push(0);

    const length = cost.length;
    for (let index = 2; index < length; index++) {
        let currentStepCost = cost[index];
        // Is it less expensive to reach this step by taking a single step from the step immediately preceding this one, or by taking a double step from
        // current - 2?

        let singleStepCost = cost[index - 1];
        let doubleStepCost = cost[index - 2];
        let lowestStepCost = Math.min(singleStepCost, doubleStepCost);
        // Overwrite the current cost with the cummulative cost.
        cost[index] = lowestStepCost + currentStepCost;
    }

    return cost.pop();
};
const cost = [1,100,1,1,1,100,1,1,100,1];
const result = minCostClimbingStairs(cost);
console.log('!');