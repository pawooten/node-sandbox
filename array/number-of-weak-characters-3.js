/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function(properties) {
    // properties[i] = [attacki, defensei], where attacki and defensei are the attack and defense stats of the ith player.
    // A player is weak if any other character in the game has both attack and defense levels strictly greater than that character.
    // Return the number of weak characters.

    // Build maps of playerDefense values keyed by the attack of the player and playerAttack values keyed by the defense of the player.
    const playerDefenseMap = new Map(), playerDefenseValuesSet = new Set(), playerAttackMap = new Map(), playerAttackValuesSet = new Set();
    properties.forEach(([attack, defense])=> {
        playerAttackValuesSet.add(attack);
        playerDefenseValuesSet.add(defense);
        if (!playerDefenseMap.has(attack)) {
            playerDefenseMap.set(attack, []);
        }
        playerDefenseMap.get(attack).push(defense);

        if (!playerAttackMap.has(defense)) {
            playerAttackMap.set(defense, []);
        }
        playerAttackMap.get(defense).push(attack);
    })
    const playerAttackValues = [...playerAttackValuesSet.keys()].sort((left, right) => right - left);
    const playerDefenseValues = [...playerDefenseValuesSet.keys()].sort((left, right) => right - left);

    let count = 0;

    // Iterate over the players
    properties.forEach(([attack, defense]) => {
        let index = 0, isWeak = false;
        while (playerAttackValues[index] > attack && !isWeak) {
            // Players exist who have a stronger attack. If any of them also have a stronger defense, this player is weak.
            if (playerDefenseMap.get(playerAttackValues[index]).some((opponentDefense) => opponentDefense > defense)) {
                count++;
                isWeak = true;
            }
            index++;
        }
    });
    return count;
};

const properties = [[1,5],[10,4],[4,3]];
const result = numberOfWeakCharacters(properties);
console.log('!');