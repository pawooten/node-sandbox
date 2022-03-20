/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    // return true if the pushed and popped arguments could have resulted from a sequence of push and pop
    // operations on an initially empty stack, or false otherwise.

    // Path describes the operations we've performed to change state from the initial empty stack.
    let path = [], result = { isValid: false };

    // pushed and popped are assured to be the same length
    const maxDepth = pushed.length * 2;

    // The stack is empty initially, so popping would accomplish nothing, we must push as the first step
    buildPath(path, 'push', pushed, popped, result, maxDepth);
    return result.isValid;
};
const buildPath = function(path, next, pushed, popped, result, maxDepth) {
    path.push(next);
    // Have we reached target state or a dead-end?
    let currentResultPopped = evaluatePath(path, pushed);
    if (arraysMatch(currentResultPopped, popped)) {
        // We found a sequence that results in the same output stack!
        result.isValid = true;
        return;
    }

    // We haven't found a match, have we passed our maxDepth?
    if (path.length < maxDepth) {
        // If we haven't already added enough push operations to exhaust the pushed input, explore another push as the next step
        if (path.map(pathPart => pathPart === 'push' ? 1 : 0).reduce((previous, current) => previous + current) < pushed.length) {
            buildPath([...path], 'push', pushed, popped, result, maxDepth);
        }
        if (path.map(pathPart => pathPart === 'pop' ? 1 : 0).reduce((previous, current) => previous + current) < popped.length) {
            buildPath([...path], 'pop', pushed, popped, result, maxDepth);
        }
    }
};
const evaluatePath = function(path, pushed) {
    let evalStack = [], resultPopped = [], pushedIndex = 0;
    path.forEach(op => {
        if (op === 'push') {
            evalStack.push(pushed[pushedIndex]);
            pushedIndex++;
        } else {
            // Pop the top of the evaluation stack into the resultPopped array (which we will compare against the received argument)
            resultPopped.push(evalStack.pop());
        }
    });
    return resultPopped;
}
const arraysMatch = function(popped1, popped2) {
    if (popped1.length != popped2.length) {
        return false;
    }
    const length = popped1.length;
    for (let index = 0; index < length; index++) {
        if (popped1[index] != popped2[index]) {
            return false;
        }
    }
    return true;
}
const pushed = [1,2,3,4,5], popped = [4,3,5,1,2];
const result = validateStackSequences(pushed, popped);
console.log('!');