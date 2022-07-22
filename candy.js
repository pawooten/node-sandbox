/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    const length = ratings.length;
    if (length === 0) {
        return 0; // No children requires zero pieces of candy.
    }
    let candies = new Array(length).fill(1); // Each child receives at least one piece of candy.
    let index = 1;
    while (index < length) {
        let currentChildRating = ratings[index], previousChildRating = ratings[index - 1];
        // Is this child's rating lower than the previous child?
        if (previousChildRating > currentChildRating) {
            // Yes. Is the neighboring child receiving more candy?
            if (candies[index - 1] <= candies[index]) {
                // No, the neighboring child needs additional candy. At least one more than this child.
                candies[index - 1] = candies[index] + 1;
                // Giving additional candy to that child may have invalidated his other neighbor, back the cursor up and validate.
                index--;
            } else {
                // The previous child has a higher rating but is already receiving more candy than the current child and doesn't need
                // additional candy. Increment the cursor and move on to the next child.
                index++;
            }
        } else {
            // No. Is the current child's rating higher than the previous child?
            if (currentChildRating > previousChildRating) {
                // Yes, the current child needs to receive at least more candy than the previous child.
                candies[index] = candies[index - 1] + 1;
            }
            // Advance the cursor to the next child.
            index++;
        }
    }

    return candies.reduce((previous, current) => previous + current, 0);
};
const ratings = [1,6,10,8,7,3,2];
const result = candy(ratings);
console.log('!');