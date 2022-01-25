/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
 var sequentialDigits = function(low, high) {
    let sequentials = [];

    // Determine all sequentials which start with 1, then 2, 3, etc.
    let candidate ='', parsedCandidate = 0;
    for (let i = 1; i < 10; i++) {
        candidate = '' + i;
        parsedCandidate = +candidate;
        while (parsedCandidate < high) {
            const nextDigit = +candidate.slice(candidate.length - 1) + 1;
            if (nextDigit > 9) {
                // shortcircuit
                parsedCandidate = high;
                continue;
            }
            candidate += nextDigit;
            parsedCandidate = +candidate;
            if (parsedCandidate >= low && parsedCandidate <= high) {
                // This candidate is a sequential
                sequentials.push(parsedCandidate);
            }
        }
    }

    return sequentials.sort((a, b) => a - b);
};

const low = 1000, high = 13000;
const result = sequentialDigits(low, high);
console.log('!');