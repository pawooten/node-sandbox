/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
     let resultBySpeed = [];
     const maxSpeed = Math.max(...piles); // Speeds greater than the number of the bananas in the largest pile aren't beneficial, since it always takes an hour to eat a pile, regardless of speed.
     let found = false;
     let speed = Math.round(maxSpeed / 2);
     while (!found) {
         resultBySpeed[speed] = finishesPilesInTime(piles, speed, h);
         if (resultBySpeed[speed]) {
             // True indicates koko was able to finish all piles of bananas in time at this speed. Is the next slower speed too slow to succeed?
             if (resultBySpeed.hasOwnProperty(speed - 1) && !resultBySpeed[speed - 1]) {
                 // Yes. This means speed is the slowest speed which still succeeds in eating all piles in time
                 found = true;
                 continue;
             }
             
             // We need to decrease speed until Koko fails to succeed.
             speed = Math.round(speed - speed / 2);
             if (resultBySpeed.hasOwnProperty(speed)) {
                 speed += 1;
             }
         } else {
             // False indicates koko was not able to finish all piles of bananas in time at this speed. Is the next higher speed fast enough to succeed?
             if (resultBySpeed[speed + 1]) {
                 // Yes. This means speed + 1 is the slowest speed which still succeeds in eating all piles in time
                 speed = speed + 1;
                 found = true;
                 continue;
             }

             // We need to increase speed until Koko succeeds.
             speed = speed + Math.round(speed / 2);
             if (resultBySpeed.hasOwnProperty(speed)) {
                 speed -= 1;
             }
         }
     }
     return speed;
 }

 const finishesPilesInTime = (piles, speed, h) => {
    let hoursSpent = 0;
    for (let index = 0; index < piles.length; index++) {
        if (speed > piles[index] ) {
            // Koko's current speed is great enough that she can finish this pile in one hour.
            hoursSpent += 1;
        } else {
            hoursSpent += Math.ceil(piles[index] / speed);
        }
    }
    return hoursSpent <= h;
};

const piles = [3,6,7,11], h = 8;
const result = minEatingSpeed(piles, h);
console.log("!");