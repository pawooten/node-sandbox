/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const zCode = 'z'.charCodeAt(0);
    const decoderMap = new Map();
    decoderMap.set(' ', ' ');
    let keyIndex = 0, keyChar;
    for (let code = 'a'.charCodeAt(0); code <= zCode; code++) {
        do {
            keyChar = key.charAt(keyIndex);
            keyIndex++;
        } while (decoderMap.has(keyChar))
        decoderMap.set(keyChar, String.fromCharCode(code));
    }

    return message.split('').map(messageChar => decoderMap.get(messageChar)).join('');
};

const key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv";
const result = decodeMessage(key, message);
console.log('!');