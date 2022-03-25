/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
    // the weight of the ith person is people[i];
    // each boat can carry a maximum weight of limit and at most two people at the same time
    // return the minimum number of boats to carry every person

    let boatCount = 0;
    people.sort((a,b) => a - b);
    do {
        let huskyPerson = people.pop();
        let matchIndex = bestMatch(people, limit - huskyPerson);
        if (matchIndex != -1) {
            // This person can be paired with another person, remove their companion from the array
            people.splice(matchIndex, 1);
        }
        boatCount++;
    }while (people.length > 0);

    return boatCount;
};
/**
 * Returns index of the person is the best match to pair in the remaining weight capacity of a life boat as described by maxWeight
 * @param {} people 
 * @param {*} maxWeight 
 */
const bestMatch = function(people, maxWeight) {
    for (let index = 0; index < people.length; index++) {
        if (people[index] > maxWeight) {
            // we've found a person whose weight exceeds the maximum remaining space. If there was a person prior in the array,
            // that person is the best person to be paired. If there wasn't a person prior in the array, returning -1 indicates their is no person
            // who can share the lifeboat and that person must go by alone.
            return index - 1;
        }
    }
    // If the weight of none of the people exceeds the maximum, the heaviest remaining person should be paired.
    return people.length - 1;
}

const people = [3,8,4,9,2,2,7,1,6,10,6,7,1,7,7,6,4,4,10,1], limit = 10;
const result = numRescueBoats(people, limit);
console.log('!');