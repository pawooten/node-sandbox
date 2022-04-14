/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let recordStack = [];
    ops.forEach(op => {
        let length = recordStack.length;
        switch (op) {
            case '+':
                let sum = +recordStack[length - 1] + +recordStack[length - 2];
                recordStack.push(sum);
                break;
            case 'D':
                let double = +recordStack[length - 1] * 2;
                recordStack.push(double);
                break;
            case 'C':
                recordStack.pop();
                break;
            default:
                // Assume op is an integer.
                recordStack.push(op);
        }
    });
    return recordStack.reduce((previous, current) => +previous + +current);
};
const ops = ["5","-2","4","C","D","9","+","+"];
const result = calPoints(ops);
console.log('!');