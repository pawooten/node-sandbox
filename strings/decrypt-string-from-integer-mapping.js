/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    const lookup = new Map();
    lookup.set('1', 'a');
    lookup.set('2', 'b');
    lookup.set('3', 'c');
    lookup.set('4', 'd');
    lookup.set('5', 'e');
    lookup.set('6', 'f');
    lookup.set('7', 'g');
    lookup.set('8', 'h');
    lookup.set('9', 'i');
    lookup.set('10', 'j');
    lookup.set('11', 'k');
    lookup.set('12', 'l');
    lookup.set('13', 'm');
    lookup.set('14', 'n');
    lookup.set('15', 'o');
    lookup.set('16', 'p');
    lookup.set('17', 'q');
    lookup.set('18', 'r');
    lookup.set('19', 's');
    lookup.set('20', 't');
    lookup.set('21', 'u');
    lookup.set('22', 'v');
    lookup.set('23', 'w');
    lookup.set('24', 'x');
    lookup.set('25', 'y');
    lookup.set('26', 'z');

    const characters = s.split(''), last = characters.length - 3;
    const result = [];
    for (let index = 0; index <= last; index++) {
        if (characters[index + 2] === '#') {
            // This is the first character of a two digit encoded character.
            result.push(lookup.get(characters[index] + characters[index + 1]));
            index += 2;
        } else {
            // This is a single digit to character encoding.
            result.push(lookup.get(characters[index]));
            index++;
        }
    }

    result.push(lookup.get(characters[last + 1]));
    result.push(lookup.get(characters[last + 2]));
    return result.join('');
};

const s = "10#11#12";
const result = freqAlphabets(s);
console.log('!');