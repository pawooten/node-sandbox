/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function(memory1, memory2) {
    let i = 1;
    do {
        if (i > memory1 && i > memory2) {
            // A crash has occurred.
            return [i, memory1, memory2];
        } else {
            // Either bank of memory (or both) has enough free to survive for another second at least.
            if (memory1 === memory2 || memory2 < memory1) {
                // We must allocate i bits of memory to memory bank 1, either because both have the same available space or because memory1 has more available.
                memory1 -= i;
            } else {
                memory2 -= i;
            }
        }
        i++;

    }while (true);
};

const memory1 = 8, memory2 = 11;
const result = memLeak(memory1, memory2);
console.log('!');