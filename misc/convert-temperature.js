/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.80 + 32.00;
    return [kelvin, fahrenheit];
};

const celsius = 122.11;
const result = convertTemperature(celsius);
console.log('!');