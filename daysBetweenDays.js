/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
 var daysBetweenDates = function(date1, date2) {
    const d1 = new Date(date1), d2 = new Date(date2);
    const diff = d2.getTime() - d1.getTime();
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.abs(diff / (86400000));
};
const date1 = "2020-01-15", date2 = "2019-12-31";
const result = daysBetweenDates(date1, date2);
console.log('!');