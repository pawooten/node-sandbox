/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
    let title = [];
    while (columnNumber > 0) {
        let currentValue = columnNumber % 26;
        if (currentValue > 0) {
            title.unshift(String.fromCharCode(currentValue + 64));
        } else {
            title.unshift('Z');
            currentValue = 26;
        }
        columnNumber -= currentValue;
        columnNumber /= 26;
    }
    return title.join('');
};

const columnNumber = 701;
const result = convertToTitle(columnNumber);
console.log('!');