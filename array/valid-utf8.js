/**
 * @param {number[]} data
 * @return {boolean}
 */
 var validUtf8 = function(data) {
    // A character in utf8 can be from 1 to 4 bytes.
    // For a 1-byte character, the first bit is a 0, folowed by its Unicode code.
    // For an n-bytes character, the first n bits are all one's, the n + 1 bit is 0, followed by n-1 bytes with the most significant 2 bits being 10.

    // Iterate through the array of data, short circuit if we determine the data is invalid.
    const length = data.length;
    let index = 0, currentByteSize;
    while (index < length) {
        currentByteSize = getByteSize(data[index]);
        if (currentByteSize === -1) {
            // This byte doesn't match 0xxxx, 110xx, 1110x or 11110. It's an invalid encoding.
            return false;
        }
        switch(currentByteSize) {
            case 1:
                // Single byte character.
                index++;
                break;
            case 2:
                // Two byte character.
                if (index + 1 >= length || !isContinuationByte(data[index + 1])) {
                    // Invalid. The byte index points to claims to be a two byte character, extending into index+1
                    return false;
                }
                index += 2;
                break;
            case 3:
                // Three byte character.
                if (index + 2 >= length || !isContinuationByte(data[index + 1]) || !isContinuationByte(data[index + 2])) {
                    // Invalid
                    return false;
                }
                index += 3;
                break;
            case 4:
                // Four byte character.
                if (index + 3 >= length || !isContinuationByte(data[index + 1] || !isContinuationByte(data[index + 2]) || !isContinuationByte(data[index + 3]))) {
                    // Invalid
                    return false;
                }
                index += 4;
                break;
            default:
                return false;
                break;
        }
    }

    return true;
};

const getByteSize = (data) => {
    const binary = ('00000000' + data.toString(2)).slice(-8);
    switch (binary.indexOf('0')) {
        case 0:
            // The first bit is zero, indicating this is a 1 byte character.
            return 1;
            break;
        case 2:
            // The first three bits are 110, indicating this is a 2 byte character.
            return 2;
            break;
        case 3:
            // The first four bits are 1110.
            return 3;
            break;
        case 4:
            // The first five bits are 11110.
            return 4;
            break;
        default:
            return -1;
    }
    return -1;
};

const isContinuationByte = (data) => {
    const binary = ('00000000' + data.toString(2)).slice(-8);
    return binary[0] === '1' && binary[1] === '0';
}

const  data = [237];
const result = validUtf8(data);
console.log('!');