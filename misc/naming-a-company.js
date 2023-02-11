/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {

    const getNewNames = (a, b) => [ b.charAt(0) + a.slice(1), a.charAt(0) + b.slice(1) ];

    const ideaSet = new Set(ideas);
    const uniqueIdeas = [...ideaSet.values()], length = uniqueIdeas.length;
    let nameCount = 0;
    let firstIdea, firstNewName, secondNewName;
    for (let firstIndex = 0; firstIndex < length - 1; firstIndex++) {
        firstIdea = uniqueIdeas[firstIndex];
        for (let secondIndex = firstIndex + 1; secondIndex < length; secondIndex++) {
            [firstNewName, secondNewName] = getNewNames(firstIdea, uniqueIdeas[secondIndex]);
            if (!ideaSet.has(firstNewName) && !ideaSet.has(secondNewName)) {
                // Neither of the new names already exists, so this is a valid company name (so is the concatenation in reverse order, unless the newNames are the same)
                nameCount++;
                if (firstNewName !== secondNewName) {
                    nameCount++;
                }
            }
        }
    }

    return nameCount;
};

const ideas = ["back", "lack"];
const result = distinctNames(ideas);
console.log('!');