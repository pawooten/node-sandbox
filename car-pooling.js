/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
 var carPooling = function(trips, capacity) {
    // trips[i] [numPassengersi, fromi, toi]

    // sort the array of trips by starting position ascending
    trips.sort((tripA, tripB) => tripA[1] - tripB[1]);

    // return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.
    let currentPassengers = [], currentPassengerCount = 0;
    let passengerMissed = false;
    for (let i = 0; i < trips.length && !passengerMissed; i++) {
        let passengers = trips[i][0], tripStart = trips[i][1];
        // Remove any passengers whose destination is or precedes i.
        currentPassengers = currentPassengers.filter(passengerBatch => passengerBatch[2] > trips[i][1]);
        currentPassengerCount = (currentPassengers.length > 0) ? currentPassengers.map(p => p[0]).reduce((previous, current) => previous + current ) : 0;
        if (currentPassengerCount + passengers <= capacity) {
            // There are enough empty seats for each passenger to ride, add the passengers (and remember where their destination is).
            currentPassengers.push(trips[i]);
            currentPassengerCount += trips[i][0];
        } else {
            passengerMissed = true;
        }    
}
    return !passengerMissed;
};
const trips = [[2,1,5],[3,5,7]], capacity = 3;
var result = carPooling(trips, capacity);
console.log('!');
