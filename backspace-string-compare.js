/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    // Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
    return processString(s) === processString(t);
};
const processString = function(s) {
    const characters = s.split('');
    const typedCharacters = [];
    characters.forEach(character => {
        if (character === '#') {
            typedCharacters.pop();
        } else {
            typedCharacters.push(character);
        }
    });
    return typedCharacters.join('');
}
const s = "a#c", t = "b";
const result = backspaceCompare(s, t);
console.log('!');