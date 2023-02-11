/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {

    const minRoundForCount = (count) => {
        if (count > 5) {
            return minRoundForCount(count - 3) + 1;
        }

        switch (count) {
            case 5:
            case 4:
                return 2;
            case 3:
            case 2:
                return 1;
            default:
                return -1;
        }
    };

    // Build a map whose keys is task difficulty, and whose count is the number of remaining tasks of that type.
    const taskMap = new Map();
    for (const task of tasks) {
        if (!taskMap.has(task)) {
            // This is the first task of this difficulty level we've encountered.
            taskMap.set(task, 1);
        } else {
            // We've already seen at least one instance of this task, increment the count.
            taskMap.set(task, taskMap.get(task) + 1);
        }
    }

    let roundCount = 0, currentRoundCount;
    // Iterate over the taskDifficulty values that we're encountered.
    for (const count of taskMap.values()) {
        currentRoundCount = minRoundForCount(count);
        if (currentRoundCount === -1) {
            // It is impossible to complete this set of tasks because we are unable to complete them individually
            return -1;
        }
        roundCount += currentRoundCount;
    }

    return roundCount;
};

const tasks = [2,3,3];
const result = minimumRounds(tasks);
console.log('!');