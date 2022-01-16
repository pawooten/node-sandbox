/**
 * @param {number[][]} grid
 * @return {number}
 */
 var cherryPickup = function(grid) {
     let robot1 = [0, 0]; // robot 1 starts at the upper left corner of the grid
     let robot2 = [0, grid[0].length - 1]; // robot 2 starts at the upper right corner of the grid

     // Determine all the paths for each robot to traverse from the starting position to any cell
     // in the bottom row of the grid.
     let robot1Paths = [], currentPath = [];
    getPaths(grid, robot1, robot1Paths, currentPath);

    let robot2Paths = [];
    currentPath = [];
    getPaths(grid, robot2, robot2Paths, currentPath);

    // Calculate the score of each path for each robot, ignoring the possibility of the paths of the robots crossing
    // If robot paths cross, the one or the other but not both robots will get the cherries for the cell in which they both occupy.
    let robot1PathScores = [];
    robot1Paths.forEach(path => {
        robot1PathScores.push(path.map(point => grid[point[0]][point[1]]).reduce((previous, current) => previous + current ));
    });
    let robot2PathScores = [];
    robot2Paths.forEach(path => {
        robot2PathScores.push(path.map(point => grid[point[0]][point[1]]).reduce((previous, current) => previous + current ));
    });

    // Determine the path which results in the best score of the paths for each robot
    const robot1BestPath = robot1Paths[robot1PathScores.indexOf(Math.max(...robot1PathScores))];
    const robot2BestPath = robot2Paths[robot2PathScores.indexOf(Math.max(...robot2PathScores))];

    // Determine the second best path for each robot, assuming the other robot went first
    let robot1Path2Scores = [];
    robot1Paths.forEach(path => {
        robot1Path2Scores.push(path.map(point => {
            // If this point along the path was claimed by the first robot, don't count the cherries
            // towards this robot's score.
            return robot2BestPath.find(pathPoint => pathPoint[0] === point[0] && pathPoint[1] === point[1]) ? 0 : grid[point[0]][point[1]];
        }).reduce((previous, current) => previous + current ));
    });

    let robot2Path2Scores = [];
    robot2Paths.forEach(path => {
        robot2Path2Scores.push(path.map(point => {
            // If this point along the path was claimed by the first robot, don't count the cherries
            // towards this robot's score.
            return robot1BestPath.find(pathPoint => pathPoint[0] === point[0] && pathPoint[1] === point[1]) ? 0 : grid[point[0]][point[1]];
        }).reduce((previous, current) => previous + current ));
    });

    const robot1SecondBestPath = robot1Paths[robot1Path2Scores.indexOf(Math.max(...robot1Path2Scores))];
    const robotSecond2BestPath = robot2Paths[robot2Path2Scores.indexOf(Math.max(...robot2Path2Scores))];

    // Determine the best score if robot 1 goes first and robot 2 goes second
    var robot1FirstTotalScore = robot1PathScores[robot1Paths.indexOf(robot1BestPath)] + robot2Path2Scores[robot2Paths.indexOf(robotSecond2BestPath)];

    // Determine the best score if robot 2 goes first and robot 1 goes second
    var robot2FirstTotalScore = robot2PathScores[robot2Paths.indexOf(robot2BestPath)] + robot1Path2Scores[robot1Paths.indexOf(robot1SecondBestPath)];

    return Math.max(robot1FirstTotalScore, robot2FirstTotalScore);
};

function getPaths(grid, robot, paths, currentPath) {
    currentPath.push(robot);
    if (robot[0] === grid.length - 1) {
        // This robot has reached the bottom row of the grid. Set its current position as the last
        // step of the path and shortcircuit.
        paths.push(currentPath);
        return;
    }
    if (robot[1] > 0) {
        // This robot is not currently in a cell of the left most column of the grid, so the robot is
        // eligible to move left+down without going out of bounds.
        const newPosition = [ robot[0] + 1, robot[1] - 1];
        getPaths(grid, newPosition, paths, [...currentPath]);
    }
    if (robot[1] < grid[0].length - 1) {
        // This robot is not currently in a cell of the right most column of the grid, so the robot is
        // eligible to move right+down without going out of bounds.
        const newPosition = [robot[0] + 1, robot[1] + 1];
        getPaths(grid, newPosition, paths, [...currentPath]);
    }

    // regardless of which column of the grid the robot is currently in, the robot is eligible to move down
    // directly without going out of bounds (because we have not yet reached the bottom row of the grid)
    const newPosition = [robot[0] + 1, robot[1]];
    getPaths(grid, newPosition, paths, [...currentPath]);
    return;
};

const grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]];
const result = cherryPickup(grid);
console.log('!');