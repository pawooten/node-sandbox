/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    // If Koko's speed (bananas per hour) >= the number of bananas in a pile, it still takes Koko an hour to eat the pile.
    // Speeds which exceed the highest pile count aren't beneficial toward achieving the goal. Start with the highest (worst) speed
    let speed = 1, hoursSpent = 0;

    do {
        hoursSpent = 0;
        for (let i = 0; i < piles.length; i++) {
            // iterate over each pile, unless the sum of the hours Koko has spent eating bananas thus far exceeds the target time, in which case, shortcircuit
            if (piles[i] > speed) {
                // determine how many hours it will take Koko to eat this pile at current speed.
                hoursSpent += Math.ceil(piles[i] / speed);
            } else {
                // Koko's current speed either matches or exceeds the number of bananas in this pile, therefore it takes one hour for Koko
                // to eat the pile.
                hoursSpent += 1;
            }
        }
        speed += 1;
    } while (hoursSpent > h); // continue decreasing the speed until Koko fails to reach the target.
    return speed - 1;
};
const piles = [1000000000,1000000000], h = 3;
const result = minEatingSpeed(piles, h);
console.log('!');