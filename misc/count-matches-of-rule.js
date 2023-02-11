/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    // Return the number of items that match the rule.

    let matchCount = 0;
    // Determine the index of the values contained within each item for which our rule should be evaluated.
    let itemIndex;
    switch (ruleKey) {
        case 'type': itemIndex = 0; break;
        case 'color': itemIndex = 1; break;
        case 'name': itemIndex = 2; break;
    }
    for (const item of items) {
        if (item[itemIndex] === ruleValue) {
            matchCount++;
        }
    }

    return matchCount;
};

const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone";
const result = countMatches(items, ruleKey, ruleValue);
console.log('!');