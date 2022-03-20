/**
 * @param {string} s
 * @return {number}
 */
 var scoreOfParentheses = function(s) {
    // Let's replace any () sequences with a 1
    let str = s.replace(/\(\)/g, '1');
    
    // find each group of 1 characters to sum. It isn't possible yet to have a digit greater than 1 because we've just started replacing.
    // str.replace(/1{2,}/g, function(match, p1, p2, p3, offset, string) {
    //     return 0;
    // });

    // let openParenthesesIndices = [];
    // for (let index = 0; index < s.length; index++) {
    //     if (s[index] === '(') {
    //         openParenthesesIndices.push(index);
    //     }
    //     if (s[index] === ')') {
    //         // This close parenthesis pairs with the most recent open.
    //         // Determine it's score and replace it and it's contents with 
    //     }
    // }

    
    return 0;
};
const s = '(()())';
const result = scoreOfParentheses(s);
console.log('!');