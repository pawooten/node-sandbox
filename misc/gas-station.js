/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const length = gas.length;

    const getNextIndex = (index) => {
        index++;
        if (index === length) {
            index = 0;
        }
        return index;
    };

    const walkCircuit = (startIndex, currentIndex, currentGas) => {
        while (currentGas > 0 && currentIndex !== startIndex) {
            currentGas += gas[currentIndex] - cost[currentIndex];
            currentIndex = getNextIndex(currentIndex);
        }
        if (currentIndex === startIndex && currentGas >= 0) {
            circuitFound = true;
            resultStartIndex = startIndex;
        }
    };

    // Iterate across each gas station. If the amount of gas available meets or exceeds the cost to reach the next gas station,
    // we should explore the possibility of a circuit from that gas station as a starting point.
    let circuitFound = false, resultStartIndex, currentGas, currentCost;
    for (let index = 0; index < length && !circuitFound; index++) {
        currentGas = gas[index], currentCost = cost[index];
        if (currentGas >= currentCost) {
            // We start with an empty tank of gas, but the current gas station has enough gas available to reach the next one, so it
            // could be a starting point of a complete circuit.
            walkCircuit(index, getNextIndex(index), currentGas - currentCost);
        }
        // If we can't reach the next gas station, don't bother trying to explore this one as a starting point for a circuit.        
    }

    return circuitFound ? resultStartIndex : -1;
};

const gas = [4,5,3,1,4], cost = [5,4,3,4,2];
const result = canCompleteCircuit(gas, cost);
console.log('!');