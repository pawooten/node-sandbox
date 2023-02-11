/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const moveUp = '../', moveNowhere = './';

    const path = [ 'main' ];
    for (const log of logs) {
        switch (log) {
            case moveUp:
                if (path.length > 1) {
                    path.pop();
                } // moving up one directory while in main is idempotent.
                break;
            case moveNowhere:
                // Do nothing
                break;
            default:
                // Assume the log is of the form '${directory}/'
                path.push(log.slice(0, log.length - 1));
                break;
        }
    }

    return path.length - 1;
};

const logs = ["d1/","../","../","../"];
const result = minOperations(logs);
console.log('!');