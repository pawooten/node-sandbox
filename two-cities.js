/**
 * @param {number[][]} costs
 * @return {number}
 */
 var twoCitySchedCost = function(costs) {

    // Assume every traveler is going to city A. Determine the switching cost of each individual traveler to travel to city B instead of city A.
    // Select the n / 2 least costly travelers to travel to city B instead.
    // costs[i] = [aCosti, bCosti]

    const travelers = costs.map((value, index) => {
        return { index: index, costA: value[0], costB: value[1], bSavings: value[0] - value[1]};
    }).sort((travelerA, travelerB) => travelerA.bSavings - travelerB.bSavings);
    let sum = 0;
    const length = costs.length, halfway = costs.length / 2;
    for (let index = 0; index < length; index++) {
        if (index < halfway) {
            sum += travelers[index].costA;
        } else {
            sum += travelers[index].costB;
        }
    }
    return sum;
};
const costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]];
const result = twoCitySchedCost(costs);
console.log('!');