/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    // Return the minimum size of the set so that at least half of the integers of the array are removed.

    // Determine how many items must be removed to satisfy the request to remove at least half of the total integers.
    // Round. If we have 5 items, 5/2 = 2.5, which we want to round to 3. Flooring 5/2 to 2 is not an accurate reflection of the minimum
    // number of integers that must be removed (because 2 < 2.5).
    const halfCount = Math.round(arr.length / 2);

    // Determine how many instances of each integer exist, by populating a map whose keys are each integer value, and whose value is the number of instances
    // contained within arr.
    let integerMap = new Map();
    arr.forEach(integer => {
        if (!integerMap.has(integer)) {
            integerMap.set(integer, 0);
        }
        integerMap.set(integer, integerMap.get(integer) + 1);
    });

    // We don't care about the specific integers whose instances we remove, only the count.    
    // Extract the counts of each integer and sort them in ascending order.
    const integerCounts = [...integerMap.values()].sort((left, right) => left - right);

    let removedIntegerCount = 0, removedIntegerInstanceCount = 0;
    while (removedIntegerInstanceCount < halfCount) {
        removedIntegerCount++;
        removedIntegerInstanceCount += integerCounts.pop();
    }

    return removedIntegerCount;
};

const  arr = [3,3,3,3,5,5,5,2,2,7];
const result = minSetSize(arr);
console.log('!');