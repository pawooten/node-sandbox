const values = [1, 2, 3, 4, 7, 7, 5, 6, 6, 7];

const findDuplicates = function(input) {
    let map = new Map();
    const length = input.length;
    for (let index = 0; index < length; index++) {
        if (map.has(input[index])) {
            // We've found a duplicate!
            return input[index];
        }
        map.set(input, true);
    }
    // No duplicate was found after iterating across each value in the input array
    return -1;
}

const result = findDuplicates(values);
