/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
 var getSkyline = function(buildings) {
    // Iterate over each building, populating a list of the segments of rooftop which compose the skyline.
    // If part of a building's rooftop is obscured by another building, only the stretch of the building which is not obscured should be included.
    // We can't just shortcircuit as soon as we encounter a building edge though, because of upside down T shapes formed by a tall skinny building in the middle of a short fat building.
    // Also, there could be a ton of buildings, so we can't compare each one to every other one, that would take too long probably.

    // Sort the buildings by left edge x coordinate ascending, so we can shortcircuit checking for overlapped rooftops once we've reached
    // the edge of the current building.
    buildings.sort((left, right) => left[0] - right[0]);

    const rooftopSegments = [];
    let segmentStart, segmentEnd;
    buildings.forEach(building => {
        // How much (if any) of this buildings rooftop is part of the skyline because it isn't obscured by another building?
        segmentStart = null;
        
    });

    return [];
};

const buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]];
const result = getSkyline(buildings);
console.log('!');