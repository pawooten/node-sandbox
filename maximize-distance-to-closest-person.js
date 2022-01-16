/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {

    // build an array summarizing the distance to nearest neighbor for each seat
    let distances = [];

    // The first and last seats in the array are special cases. For the first seat in the array, only the
    // right most neighbor matters. For the last seat in the array, only the left most neighbor matters.
    if (!seats[0]) {
        // The first seat in the array is not occupied.
        distances.push(seats.indexOf(1));
    }
    if (!seats[seats.length - 1]) {
        // The last seat in the array is not occupied.
        distances.push(seats.length - 1 - seats.lastIndexOf(1));
    }

    // Iterate over the remaining seats, calculating the distance to its closest occupied neighbor
    // to the left and to the right.
    for (let i = 1; i < seats.length - 1; i++) {
        if (!seats[i]) {
            // This seat is not occupied, and since we've already handled the edge cases, calculate left and right distances
            const leftDistance = i - seats.slice(0, i).lastIndexOf(1);
            const rightDistance = seats.indexOf(1, i) - i;
            distances.push(Math.min(leftDistance, rightDistance));
        }
    }
    return Math.max(...distances);
};
const seats = [0,1];
const result = maxDistToClosest(seats);
console.log('!');
