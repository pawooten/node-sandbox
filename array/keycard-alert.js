/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {

    // Parse an HH:MM timestamp into the total minutes since 00:00
    const parseTime = (timeStr) => {
        const timeValues = timeStr.split(':');
        return 60 * (+timeValues[0]) + (+timeValues[1]);
    };

    // First, determine the set of users who were alerted during the day.
    const alertedUsers = new Set();

    // Iterate over the keycard data. Build a map whose keys are employee names and whose values are a list of the times that user swiped.
    let index = 0, username, time;
    const timesByUser = new Map();
    const length = keyName.length;
    for (; index < length; index++) {
        username = keyName[index];
        time = parseTime(keyTime[index]);
        if (!timesByUser.has(username)) {
            timesByUser.set(username, [ time ]);
        } else {
            timesByUser.get(username).push(time);
        }
    }

    // Iterate over each user in the map.
    let mappedTimes, lastOffset;
    for (const mappedUser of timesByUser.keys()) {
        // Assuming sort is not necessary.
        mappedTimes = timesByUser.get(mappedUser).sort((left, right) => left - right);
        lastOffset = mappedTimes.length - 2;
        // Iterate over the times of this user, but stop at the second-to-last time
        for (index = 0; index < lastOffset; index++) {
            // Is the difference between the current time and next + the following difference > 60 minutes? If not, we have a violation.
            if (Math.abs(mappedTimes[index + 2] - mappedTimes[index]) <= 60) {
                alertedUsers.add(mappedUser);
                // We are not concerned whether a user was alerted multiple times, so skip to the next user.
                index = lastOffset;
            }
        }
    }
    return [...alertedUsers.values()].sort(); // ascending alphabetic sort
};

const keyName = ["a","a","a","a","a","b","b","b","b","b","b"], keyTime = ["04:48","23:53","06:36","07:45","12:16","00:52","10:59","17:16","00:36","01:26","22:42"];
const result = alertNames(keyName, keyTime);
console.log('!');