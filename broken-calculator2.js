/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
 var brokenCalc = function(startValue, target) {
    // in one operation, you can multiple the number on display by 2, or subtract 1 from the number on display
    // return the minimum number of operations needed to dislpapy target on the calculator.

    // If the number is odd, we must over shoot it by 1 and then subtract, because the only way to increment is
    // by multiplying by 2, and the product of an even number is always even.

    let operationCounter = { count: 0 };
    brokenCalcRecursive(startValue, target, operationCounter);
    return operationCounter.count;
};
const brokenCalcRecursive = function(value, target, operationCounter) {
    if (value === target) {
        return;
    }

    if (target % 2 !== 0 || value === target + 1) {
        operationCounter.count++;
        // Increment target instead of decrement, because we are working backwards halving or incrementing it back to our starting value.
        return brokenCalcRecursive(value, target + 1, operationCounter);
    }

    // Halve
    operationCounter.count++;
    return brokenCalcRecursive(value, target / 2, operationCounter);
}
const startValue = 2, target = 3;
const result = brokenCalc(startValue, target);
console.log('!');
