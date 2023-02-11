/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const ringMap = new Map(), length = rings.length;
    let color, rod;
    for (let index = 0; index < length; index += 2) {
        color = rings[index];
        rod = rings[index + 1];
        if (!ringMap.has(rod)) {
            ringMap.set(rod, new Set( color ));
        } else {
            ringMap.get(rod).add(color);
        }
    }

    let sum = 0;
    for (const value of ringMap.values()) {
        if (value.size === 3) {
            sum++;
        }
    }
    return sum;
};

const rings = "B0B6G0R6R0R6G9";
const result = countPoints(rings);
console.log('!');