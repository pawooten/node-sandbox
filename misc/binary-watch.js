/**
 * @param {number} turnedOn
 * @return {string[]}
 */
 var readBinaryWatch = function(turnedOn) {
    // A binary watch has 4 LEDs that represent hours 0-11, and 6 LEDs on the bottom to represent minutes 0-59.
    // turnedOn is an integer representing the number of LEDs currently on (not counting the PM indicator).

    // Declare a bit array representing the LEDs.
    const bits = new Array(10).fill(0);
    // turn on some bits
    let index = 0;
    while (turnedOn > 0) {
        bits[index] = 1;
        index++;
        turnedOn--;
    }
    const times = [getTime(bits) ];

    

    return times;
};

const getTime = (bits) => {
    let hours = 0, seconds = 0;
    for (let power = 0; power < bits.length; power++) {
        if (power < 7) {
            // 2^0 - 2^6 = 1 - 32
            if (bits[power]) {
                seconds += Math.pow(2, power);
            }
        } else {
            if (bits[power]) {
                hours += Math.pow(2, power - 6);
            }
        }
    }


    return `${hours}:${('0' + seconds).slice(-2)}`;
}

const turnedOn = 1;
const result = readBinaryWatch(turnedOn);
console.log('!');