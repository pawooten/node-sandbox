/**
 * @param {number[][]} points
 * @return {number}
 */
//  let findMinArrowShots = function(points) {
//     // need to group each balloon radius start and end point with other balloon radius start and end points
//     // which overlap and can be hit with the same arrow.
//     if (!points || points.length === 0) {
//         return 0; // No balloons require zero arrows to pop
//     }

//     let arrowCount = 0;
//     while (points.length > 0) {
//         let poppableBalloonsMap = new Map();
//         points.forEach(balloonRadiusPoints => {
//             for (let i = balloonRadiusPoints[0]; i <= balloonRadiusPoints[1]; i++) {
//                 // Each point between the start of this balloon radius and the end of this balloon radius
//                 // is a candidate for where an arrow can be shot which will pop the balloon.
//                 let poppableBalloonList = poppableBalloonsMap.get(i) || [];
//                 poppableBalloonList.push(balloonRadiusPoints);
//                 poppableBalloonsMap.set(i, poppableBalloonList);
//             }
//         });
//         var poppableBalloonsArray = Array.from(poppableBalloonsMap);
//         // Sort so that the points which will hit the most balloons are at the end of the array.
//         poppableBalloonsArray.sort( (pointA, pointB) => {
//             return pointA[1].length < pointB[1].length ? -1 : 1;
//         } );

//         // Shot an arrow at the point which will hit the largest number of balloons as the first shot
//         // Remove each balloon hit by that arrow from the points array.
//         let targetPointAndBalloons = poppableBalloonsArray.pop();
//         targetPointAndBalloons[1].forEach(balloon => {
//             // Each of the balloons in this array will be popped by the arrow we just fired, so remove
//             // them from the points array and continue processing until all balloons have been removed.
//             const index = points.indexOf(balloon);
//             points.splice(index, 1);
//         });
//         arrowCount += 1;

//     }

//     return arrowCount;
// };

/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
     // sort the balloons by right most edge ascending
    points.sort((a,b) => a[1] - b[1]);
    // initialize position to the right most edge of the first balloon
    let count = 1, position = points[0][1];
    // iterate over the remaining balloons
    for(let i=1; i<points.length; i++){        
        if(position >= points[i][0]){
            // The current position is >= the left most edge of the next balloon,
            // continue to the next iteration without firing an arrow.
            continue;
        }
        // The current position is < the left most edge of the next balloon, so this balloon
        // can only be popped by firing an arrow through it. No opportunity to pop this plus
        // additional balloons we've already iterated past exists. It may be possible this balloon overlaps
        // with another balloon further in the array though.
        count++;
        // Move position to the right most edge of the next balloon
        position = points[i][1];
    }
    return count;
};
const points = [[10,16],[2,8],[1,6],[7,12]];
var result = findMinArrowShots(points);
console.log('!');