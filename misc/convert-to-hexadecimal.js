/**
 * @param {number} num
 * @return {string}
 */
 var toHex = function(num) {
    if (num < 0) {
        // handle twos compliment.
        const bits = Math.abs(num).toString(2).split(''), bitsLength = bits.length;
        let bitIndex;
        for (bitIndex = 0; bitIndex < bitsLength; bitIndex++) {
            if (bits[bitIndex] === '1') {
                bits[bitIndex] = '0';
            } else {
                bits[bitIndex] = '1';
            }
        }
        // Set carry to 1 initially to accomplish the add.        
        let carry = '1';
        for (bitIndex = bitsLength - 1; bitIndex >= 0 && carry === '1'; bitIndex--) {
            if (bits[bitIndex] === '1') {
                // This bit is set, so adding the carry results in binary 2, which clears this bit and sets the carry.
                bits[bitIndex] = '0';
                carry = '1';
            } else {
                // This bit isn't set, so the carry sets it but now we're done.
                bits[bitIndex] = '1';
                carry = '0';
            }
        }

        num = bits.join('')

    }
};

const num = -26;
const result = toHex(num);
console.log('!');