/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    
    // Build a map whose key is a source and whose value is a map of unique destinations and the cheapest price
    let flightSource, flightDestination, flightPrice, subMap;
    const flightMap = new Map();
    for (const flight of flights) {
        [flightSource, flightDestination, flightPrice] = flight;
        if (!flightMap.has(flightSource)) {
            // This is the first flight we've processed which can departs from this source.
            subMap = new Map();
            subMap.set(flightDestination, flightPrice);
        } else {
            // At least one other flight has already been processed which departs from this source.
            subMap = flightMap.get(flightSource);
            if (!subMap.has(flightDestination)) {
                // This is the first flight we know of from source to destination
                subMap.set(flightDestination, flightPrice);
            } else {
                // We know of at least one other flight from source to destination. We only care about this flight if it's less expensive
                subMap.set(flightDestination, Math.min(subMap.get(flightDestination), flightPrice));
            }
        }
    }

    let flightFound = false;
    let lowestCostFlight = Number.MAX_SAFE_INTEGER;
    const findPath = (currentLocationIndex, currentCost, remainingStops) => {
        let availableFlights = flightMap.get(currentLocationIndex);
        if (!availableFlights) {
            availableFlights = new Map();
        }
        // Iterate over the destinations reachable from our current location.
        for (const availableFlightDestination of availableFlights.keys()) {
            if (availableFlightDestination === dst) {
                // Good news, there is (at least one) direct flight to the destination!
                flightFound = true;
                lowestCostFlight = Math.min(lowestCostFlight, currentCost + availableFlights.get(availableFlightDestination));
                // Don't shortcircuit, because if there is another flight to the destination from our current location, we may want to take that one since it could be cheaper.
            } else {
                // This flight doesn't reach our destination directly, but...
                if (remainingStops > 0) {
                    // We have at least one stop left, so we should explore the possibility of reaching the destination from each available flight
                    findPath(availableFlightDestination, currentCost + availableFlights.get(availableFlightDestination), remainingStops - 1);
                }    
            }
        }
    };
    findPath(src, 0, k);

    // Determine the set of paths that can be taken to traverse from source to destination with <= k stops along the way.
    if (!flightFound) {
        return -1;
    }

    return lowestCostFlight;
};

const n = 5, flights = [[4,1,1],[1,2,3],[0,3,2],[0,4,10],[3,1,1],[1,4,3]], src = 2, dst = 1, k = 1;
const result = findCheapestPrice(n, flights, src, dst, k);
console.log('!');