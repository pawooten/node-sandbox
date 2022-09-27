/**
 * @param {number[]} changed
 * @return {number[]}
 */
 var findOriginalArray = function(changed) {
    // An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.
    // If changed is a doubleds array, return original. If changed is not a doubled array, return an empty array.

    // Build a map whose keys are the values contained within changed, and whose values are the number of instances of that value.
    const valueMap = new Map();
    changed.forEach(changedValue => {
        if (!valueMap.has(changedValue)) {
            valueMap.set(changedValue, 1);
        } else {
            valueMap.set(changedValue, valueMap.get(changedValue) + 1);
        }
    });

    // The keys of valueMap are the unique values within changed.
    // Iterate over the unique values ordered from lowest to highest.
    const sortedKeys = [...valueMap.keys()].sort((left, right) => left - right);
    let keyCount, doubledKey, doubledKeyCount;
    for (const sortedKey of sortedKeys) {
        keyCount = valueMap.get(sortedKey);
        if (keyCount === 0) {
            // A value which only existed due to doubling will have a count of zero if we've processed it's halve, move on to the next key.
            continue;
        }
        doubledKey = sortedKey * 2;
        if (sortedKey === doubledKey) {
            // they must be zero for this expression to evaluate to true.
            if (keyCount % 2 === 0) {
                valueMap.set(sortedKey, keyCount / 2);
            } else {
                return [];
            }
        } else {
            doubledKeyCount = valueMap.get(doubledKey);
            if (doubledKeyCount === undefined || doubledKeyCount < keyCount) {
                // this cannot be a doubled array. We found keyCount instances of the current sorted key. Since we're iterating over the keys in ascending order, each of these must have been in the original and are not
                // the result of doubling half this value.
                // We don't have enough instances of this key doubled to be valid, shortcircuit and return an empty array.
                return [];
            }
            valueMap.set(doubledKey, doubledKeyCount - keyCount);    
        }
    }

    // If we haven't shortcircuited by now, the array is doubled. Filter out any entries from the map which have a length of zero
    let result = [];
    sortedKeys.forEach(key => {
        keyCount = valueMap.get(key);
        while (keyCount > 0) {
            result.push(key);
            keyCount--;
        }
    });
    return result;
};

const changed = [0];
const result = findOriginalArray(changed);
console.log('!');