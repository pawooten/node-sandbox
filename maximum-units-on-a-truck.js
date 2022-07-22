/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    // boxTypes[i] = [ numberOfBoxesi, numberOfUnitsPerBoxi]

    // Sort the box Types by units per box ascending, so that the boxes which are most unit per box are at the end of the list.
    boxTypes.sort((left, right) => left[1] - right[1]);
    let unitCount = 0;
    while (truckSize > 0 && boxTypes.length > 0) {
        let currentBoxTypeCount, currentUnitsPerBox;
        [currentBoxTypeCount, currentUnitsPerBox] = [...boxTypes.pop()];
        // Hopefully we'll have enough space in the truck for all boxes of this type.
        let boxesToAdd = currentBoxTypeCount;
        if (currentBoxTypeCount > truckSize) {
            // We don't have enough space in the truck to accommodate all boxes of this type, add what we can.
            boxesToAdd = truckSize;
        }
        unitCount += currentUnitsPerBox * boxesToAdd;
        truckSize -= boxesToAdd;
    }

    return unitCount;
};

const boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4;
const result = maximumUnits(boxTypes, truckSize);
console.log('!');