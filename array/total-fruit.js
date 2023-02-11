/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const length = fruits.length;
    if (length < 3) {
        return length;
    }

    // Set fruitType1 to the type the first element. 
    let fruitType1 = fruits[0], last1, fruitType2, last2;
    // Advance the cursor until a fruit type other than fruitType1 is encountered.
    let index = 1;
    do {
        fruitType2 = fruits[index];
        last2 = index;
        index++;
    } while (fruitType1 === fruitType2);
    if (fruitType2 === undefined) {
        // Every tree is the same type, so we are able to pick one of each tree.
        return fruits.length;
    }
    last1 = index - 2;
    // The initial currentCount may be two (if the first two fruit types do not match), or it may be greater than two
    // (if multiple fruit of the same type within the first three elements exists).
    let currentFruitType, currentCount = index, maxCount = currentCount;

    // Iterate through the remaining fruit trees.
    for (; index < length; index++) {
        currentFruitType = fruits[index];
        if (currentFruitType === fruitType1 || currentFruitType === fruitType2) {
            // We can continue the streak of fruit trees because this one is the same type as one of our baskets.
            currentCount++;
            // Wait until we break the streak or reach the end of the trees to see if our current streak is a new record.
            if (currentFruitType === fruitType1) {
                last1 = index;
            } else {
                last2 = index;
            }
        } else {
            // Stop, we can't pick fruit from this tree. First, update our records in case we've set a new record already.
            maxCount = Math.max(maxCount, currentCount);

            // Regardless of whether we just set a new record, we may be able to set a new record by combining this new fruit type
            // with the type of the previous tree.
            if (fruitType1 === fruits[index - 1]) {
                // We can start a new chain with fruitType1.
                fruitType2 = fruits[index];
                // Our new chain begins after the last instance of fruitType2.
                currentCount = index - last2;
                last2 = index;
            } else {
                // We can start a new chain with fruitType2.
                fruitType1 = fruits[index];
                // Our new chain begins after the last instance of fruitType1.
                currentCount = index - last1;
                last1 = index;
            }
        }
    }
    
    maxCount = Math.max(maxCount, currentCount);
    return maxCount;
};

const fruits = [3,3,3,1,2,1,1,2,3,3,4];
const result = totalFruit(fruits);
console.log('!');