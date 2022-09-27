/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function(properties) {
    // properties[i] = [attacki, defensei], where attacki and defensei are the attack and defense stats of the ith player.
    // A player is weak if any other character in the game has both attack and defense levels strictly greater than that character.
    // Return the number of weak characters.

    
    // Sort by attack
    properties.sort((left, right) => left[0] > right[0]);
    const playersByDefense = [].concat(properties).sort((left, right) => left[1] > right[1]);
    let count = 0;
    properties.forEach((playerProperties) => {
        if (isWeak(playerProperties, properties, playersByDefense)) {
            count++;
        }
    })
    return count;
};

const isWeak = function(playerProperties, playersByAttack, playersByDefense) {
    const length = playersByAttack.length, attackIndex = playersByAttack.indexOf(playerProperties), defenseIndex = playersByDefense.indexOf(playerProperties);
    if (attackIndex === 0 || defenseIndex === 0) {
        // This player has either the best attack or the best defense (or both) of all players in the game, therefore it cannot be weak.
        return false;
    }
    if (attackIndex === length - 1 || defenseIndex === length - 1) {
        // This player has either the worst attack or the worst defense of all players in the game. The only way for them to not be weak is to have
        // the best defense / attack, which they don't because we didn't shortcircuit earlier.
        return true;
    }
    // This player might be weak, they are not for certain weak or not weak. What is the smallest set of opponents we can compare this player to
    // in order to determine if they are weak or not?

    if (attackIndex < defenseIndex && attackIndex <= length - 1 - defenseIndex) {
        
    }
}

const properties = [[1,5],[10,4],[4,3]];
const result = numberOfWeakCharacters(properties);
console.log('!');