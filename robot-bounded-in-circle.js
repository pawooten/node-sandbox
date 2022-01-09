/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
     var currentlyFacing = 'N'; // N/S/E/W
     var currentLocation = [0,0]; // The robot starts at the origin x, y
    // Apply all instructions and save each point along the way
    instructions.split('').forEach(instruction => {
        switch (instruction) {
            case 'G': // go straight one unit
                move(currentlyFacing, currentLocation);
                break;
            case 'L': // turn 90 degrees to the left
                currentlyFacing = turnLeft(currentlyFacing);
                break;
            case 'R': // turn 90 degrees to the right
                currentlyFacing = turnRight(currentlyFacing);
                break;
        }
    });    

    const atOrigin =  currentLocation[0] === 0 && currentLocation[1] === 0;
    return (atOrigin && currentlyFacing === 'N') || currentlyFacing !== 'N';
};
const turnLeft = (currentlyFacing) => ({
    'N': 'W', // was facing north, facing west after turning left
    'W': 'S',
    'S': 'E',
    'E': 'N'
})[currentlyFacing];
const turnRight = (currentlyFacing) => ({
    'N': 'E', // was facing north, facing east after turning left
    'E': 'S',
    'S': 'W',
    'W': 'N'
})[currentlyFacing];

const move = function(currentlyFacing, currentLocation) {
    switch( currentlyFacing) {
        case 'N':
            currentLocation[1] += 1; // increement the y coordinate to move north
            break;
        case 'E':
            currentLocation[0] += 1; // increment the x coordinate to move east
            break;
        case 'S':
            currentLocation[1] -= 1; // decrement the y coordinate to move south
            break;
        case 'W':
            currentLocation[0] -= 1; // decrement the x coordinate to move west
            break;
    }
} 
const instructions = "GG";
const result = isRobotBounded(instructions);
console.log('!');