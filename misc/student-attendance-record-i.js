/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absentCount = 0, consecutiveLateCount = 0;
    for (const record of s.split('')) {
        switch (record) {
            case 'A':
                // The student is absent.
                absentCount++;
                if (absentCount > 1) {
                    // The student was not absent for strictly fewer than 2 days total.
                    return false;
                }
                // Reset the consecutiveLateCount, since the absence should not also count as a consecutive late attendance.
                consecutiveLateCount = 0;
                break;
            case 'L':
                // The student is late.
                consecutiveLateCount++;
                if (consecutiveLateCount > 2) {
                    // The student was late for more than two consecutive days.
                    return false;
                }
                break;
            case 'P':
                consecutiveLateCount = 0;
            default:
                break;
        }
    }
    return true;
};


const s = "LPLPLPLPLPL";
const result = checkRecord(s);
console.log('!');