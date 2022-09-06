/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let sum = 0, pow = 0;
    for (let index = columnTitle.length - 1; index >= 0; index--) {
        sum += (columnTitle.charCodeAt(index) - 64) * Math.pow(26, pow);
        pow++;
    }
    return sum;
};
const columnTitle = "AB";
const result = titleToNumber(columnTitle);
console.log('!');