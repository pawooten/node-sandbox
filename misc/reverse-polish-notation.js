/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const isOperator = (token) => {
        switch (token) {
            case '+':
            case '-':
            case '/':
            case '*':
                return true;
            default:
                return false;
        }
    };

    const values = [];
    let left, right, result;
    for (const token of tokens) {
        if (!isOperator(token)) {
            values.push(token);
        } else {
            // We have an operator
            right = +values.pop();
            left = +values.pop();
            switch (token) {
                case '+':
                    values.push(left + right);
                    break;
                case '-':
                    values.push(left - right);
                    break;
                case '*':
                    values.push(left * right);
                    break;
                case '/':
                    result = left / right;
                    if (result > 0) {
                        values.push(Math.floor(result));
                    } else {
                        values.push(Math.ceil(result));
                    }
                    break;
            }
        }
    }
    return values.pop();
};

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
const result = evalRPN(tokens);
console.log('!');