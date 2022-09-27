/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function(properties) {
    // properties[i] = [attacki, defensei], where attacki and defensei are the attack and defense stats of the ith player.
    // A player is weak if any other character in the game has both attack and defense levels strictly greater than that character.
    // Return the number of weak characters.

    // The players with the highest combined stats are most likely to be stronger than other players, and for optimization purposes, we want to
    // shortcircuit as soon as possible.
    // Sort by attack + defense descending.
    properties.sort((left, right) => left[0] + left[1] > right[0] + right[1]);
    let count = 0;
    // iterate over the collection of players, determining if each player is weak or not.
    properties.forEach((playerProperties) => {
        if (isWeak(playerProperties, properties)) {
            count++;
        }
    });
    return count;
};

const isWeak = function(playerProperties, properties) {
    const length = properties.length;
    let index;
    ([playerAttack, playerDefense] = playerProperties);
    for (index = 0; index < length; index++) {
        ([opponentAttack, opponentDefense] = properties[index]);
        if (playerAttack === opponentAttack && playerDefense === opponentDefense) {
            // Don't compare this player to itself, move on to the next opponent.
            continue;
        }
        if (playerAttack < opponentAttack && playerDefense < opponentDefense) {
            // Don't bother comparing against other 
            return true;
        }
    }
    return false;
}

const properties = [[1,5],[10,4],[4,3]];
const result = numberOfWeakCharacters(properties);
console.log('!');