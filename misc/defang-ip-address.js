/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    //const defangedPeriodCharacters = ['[', '.', ']'];
    const result = [];
    for (const character of address.split('')) {
        if (character === '.') {
            //result.push(...defangedPeriodCharacters);
            result.push('[', '.', ']');
        } else {
            result.push(character);
        }
    }
    return result.join('');
};

const address = "1.1.1.1";
const result = defangIPaddr(address);
console.log('!');