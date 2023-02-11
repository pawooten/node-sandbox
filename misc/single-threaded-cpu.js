/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    // tasks[0] = [enqueueTime, processingTime]
    // cpu must choose the task with the shortest processing time

    // Iterate over the set of tasks,
    const length = tasks.length;

    // Building a map whose values are arrays of tasks and whose key is processingTime
    const tasksByProcessingTime = new Map();
    let task, processingTime;
    for (let index = 0; index < length; index++) {
        task = tasks[index];
        task.taskIndex = index; // Copy the index of the task into a taskIndex property.
        processingTime = task[1];
        if (!tasksByProcessingTime.has(processingTime)) {
            // This is the first task we've encountered with this processingTime.
            tasksByProcessingTime.set(processingTime, [ task ]);
        } else {
            tasksByProcessingTime.get(processingTime).push(task);
        }
    }

    // Sort the sets of tasks by processingTime, smallest to largest
    const orderedProcessingTimes = [...tasksByProcessingTime.keys()].sort((left, right) => left - right);
    const result = [];

    // Iterate over each set of tasks
    for (const orderedProcessingTime of orderedProcessingTimes) {
        // Retrieve the set of tasks which have this processing Time, and sort by enqueueTime
        tasks = tasksByProcessingTime.get(orderedProcessingTime);
        tasks.sort((left, right) => left[0] - right[0]);
        // Iterate over the tasks
        for (const task of tasks) {
            result.push(task.taskIndex);
        }
    }
    return result;
};

const tasks = [[1,2],[2,4],[3,2],[4,1]];
const result = getOrder(tasks);
console.log('!');