/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    // 'MM-DD'
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const getDaysSet = (arrive, leave) => {
        const [arriveMonth, arriveDay] = arrive.split('-');
        let monthIndex = +arriveMonth - 1, day = +arriveDay;

        if (arrive === leave) {
            return new Set( [ `${monthIndex}.${day}` ]);
        }
        const [leaveMonth, leaveDayStr] = leave.split('-');
        let leaveMonthIndex = +leaveMonth - 1, leaveDay = +leaveDayStr;

        const days = new Set();
        do {
            days.add(`${monthIndex}.${day}`);
            day++;
            if (day > daysPerMonth[monthIndex]) {
                day = 1;
                monthIndex++;
            }
        } while (monthIndex !== leaveMonthIndex || day !== leaveDay);
        days.add(`${monthIndex}.${day}`);
        return days;
    };

    let count = 0;
    const aliceDays = getDaysSet(arriveAlice, leaveAlice), bobDays = getDaysSet(arriveBob, leaveBob);
    for (const aliceDay of aliceDays.values()) {
        if (bobDays.has(aliceDay)) {
            count++;
        }
    }
    return count;
};

const arriveAlice = "12-31", leaveAlice = "12-31", arriveBob = "08-16", leaveBob = "08-19";
const result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
console.log('!');