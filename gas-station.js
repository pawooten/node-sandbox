/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
  // given two integer arrays, gas and cost, return the starting gas station's index if youn can travel around the circuit once in the clockwise direction.
  // otherwise return -1.  

  // it costs cost[i] of gas to travel from the ith station to it's next station.

  // attempt to traverse the circuit for each starting index. 
  for (let index = 0; index < gas.length; index++) {
      // iterate across each of the starting location gas stations, and attempt to traverse the circuit.
      let circuitIndex = index, currentGas = 0;
      do {
        currentGas += gas[circuitIndex];
        // Do we have enough gas to reach the next station?
          currentGas -= cost[circuitIndex];
          circuitIndex++;
          if (circuitIndex === gas.length) {
              circuitIndex = 0;
          }

      } while ( circuitIndex !== index && currentGas >= 0);
      // We iterated back to the starting index without running out of gas, so we've found a starting index that
      // can achieve a full circuit.
      if (currentGas >= 0) {
          return index;
      }
  }
  return -1;
};
const gas = [1,2,3,4,5], cost = [3,4,5,1,2];
const result = canCompleteCircuit(gas, cost);
console.log('!');