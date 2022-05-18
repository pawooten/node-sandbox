/**
 * @param {number[][]} points
 * @return {number}
 */
 var minCostConnectPoints = function(points) {
    // The cost of connecting two points is the manhattan distance between them, [xi - xj] + [yi - yj];
    let cumulativeCost = 0, pathPoints = [ points[0] ];

    // Find the cheapest cost of connecting any point along the path to a point that is not yet reached by the path.
    while (points.length > 0) {
        let newPoint = null, newPointCost = null;
        pathPoints.forEach(pathPoint => {
            points.forEach(point => {
                let cost = calculateCost(pathPoint, point);
                if (newPointCost === null || newPointCost > cost) {
                    newPointCost = cost;
                    newPoint = point;
                }
            });
        });
        pathPoints.push(newPoint);
        cumulativeCost += newPointCost;
        points.splice(points.indexOf(newPoint), 1);
    }
    return cumulativeCost;
};
const calculateCost = function(pointA, pointB) {
    return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}
const findCheapestDestination = function(start, points) {
    let cheapestCost = null, destination = null;
    points.forEach(point => {
        let cost = calculateCost(start, point);
        // Make sure we're not comparing start to itself
        if (cost > 0) {
            if (cheapestCost === null || cheapestCost > cost) {
                cheapestCost = cost;
                destination = point;
            }
        }
    });
    return { Destionation: destination, Cost: cheapestCost };
}
const points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
const result = minCostConnectPoints(points);
console.log('!');