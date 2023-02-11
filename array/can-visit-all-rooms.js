/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Array(rooms.length);
    visited.fill(false);

    const exploreRooms = (currentRoomIndex) => {
        visited[currentRoomIndex] = true;
        // Iterate over the index of each room accessible from the current room (if any).
        for (const accessibleRoomIndex of rooms[currentRoomIndex]) {
            if (!visited[accessibleRoomIndex]) {
                // We have not yet visited this room.
                exploreRooms(accessibleRoomIndex);
            }
        }
    };
    exploreRooms(0);

    return visited.every(wasVisited => wasVisited);
};

const rooms = [[1,3],[3,0,1],[2],[0]];
const result = canVisitAllRooms(rooms);
console.log('!');