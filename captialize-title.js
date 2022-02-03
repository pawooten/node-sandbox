/**
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function(title) {
    // string of one or more words separated by a single space. Each word consists of English letters.
    let capitalizedTitle = '';
    title.split(' ').forEach(word => {
        if (word.length < 3) {
            // This word is 1 or 2 characters long, capitalize the entire word.
            capitalizedTitle += word.toLowerCase() + ' ';
        } else {
            // This word is long enough to be first letter capital, remaining lowercase.
            capitalizedTitle += word[0].toUpperCase() + word.toLowerCase().substring(1, word.length) + ' ';
        }
    });
    return capitalizedTitle.substring(0, capitalizedTitle.length - 1);
};

const title = "i lOve leetcode"
const result = capitalizeTitle(title);
console.log('!');