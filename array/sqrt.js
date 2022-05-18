/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
     if (x === 0) {
         return 0;
     }
    let root = 2;
    while (root * root <= x) {
        root++;
    }
    root--;
    return root;
};
const x = 0;
const result = mySqrt(x);
console.log('!');