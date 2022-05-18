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
    let doubled = value * 2;
    if (doubled <= target + 1) {
        // Double
        operationCounter.count++;
        brokenCalcRecursive(value *= 2, target, operationCounter);
        return;
    }
    // Doubling the value would overshoot the target too far, decrement to a number we can double to not overshoot
    operationCounter.count++;
    brokenCalcRecursive(value - 1, target, operationCounter);
}
const startValue = 1, target = 1000000000;
const result = brokenCalc(startValue, target);
console.log('!');
