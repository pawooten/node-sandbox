/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    // Create a map whose keys are years for which population data is known, and whose value is the number of people known to be alive during that year.
    const populationMap = new Map();
    let birthYear, deathYear, minYear, maxYear;
    [minYear, maxYear] = logs[0];
    for (const log of logs) {
        [birthYear, deathYear] = log;
        minYear = Math.min(minYear, birthYear);
        maxYear = Math.max(maxYear, deathYear);

        // People are considered alive the year they are born, and dead the year they die, regardless of when during the year either birth or death occurs.
        while (birthYear < deathYear) {
            if (!populationMap.has(birthYear)) {
                populationMap.set(birthYear, 1);
            } else {
                populationMap.set(birthYear, populationMap.get(birthYear) + 1);
            }
            birthYear++;
        }
    }

    let result = 0, resultValue = 0, currentPopulation;
    while (minYear < maxYear) {
        currentPopulation = populationMap.get(minYear);
        if (currentPopulation > resultValue) {
            result = minYear;
            resultValue = currentPopulation;
        } 
        minYear++;
    }

    return result;
};
const logs = [[1950,1961],[1960,1971],[1970,1981]];
const result = maximumPopulation(logs);
console.log('!');