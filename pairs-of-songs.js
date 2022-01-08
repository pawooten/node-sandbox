/**
 * @param {number[]} time
 * @return {number}
 */
 var numPairsDivisibleBy60 = function(time) {
     var counter = 0;
    for ( let i = 0; i < time.length - 1; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 === 0) {
                // We found a pair divisible by 60!
                counter++;
            }
        }
    }
    return counter;
};

const time = [30, 20, 150, 100, 140];
var result = numPairsDivisibleBy60(time);
console.log('!');