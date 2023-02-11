/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for (const operation of operations) {
        if (operation.charAt(0) === '-' || operation.charAt(2) === '-') {
            x--;
        } else {
            x++;
        }
    }
    return x;
};

const operations = ["--X","X++","X++"];
const result = finalValueAfterOperations(operations);
console.log('!');