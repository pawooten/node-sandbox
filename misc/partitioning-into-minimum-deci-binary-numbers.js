/**
 * @param {string} n
 * @return {number}
 */
 var minPartitions = function(n) {
    const nValue = +n;
    // Determine the set of deci-binary numbers which are less than the target, starting with "1", since summing "0" isn't useful.
    let deciBinaryValues = [];
    let value = binaryValue = 0;
    do {
        binaryValue++;
        value = parseInt(binaryValue.toString(2));
        deciBinaryValues.push(value);
    } while (value < nValue);
    // Pop the last value that was pushed, because it exceeds n and cannot be summed to reach n (because negative numbers are forbidden).
    deciBinaryValues.pop();

    let partitionCount = 0;
    while (n != 0) {
        let value = deciBinaryValues.pop();
        let count = Math.floor(n / value);
        partitionCount += count;
        n = n % value;
    }
    return partitionCount;
};
const n = "82734";
const result = minPartitions(n);
console.log("!");