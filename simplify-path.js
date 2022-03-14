/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    // convert an absolute path to a canonical path.
    // . = current directory
    // .. = parent directory
    // any other format of periods, such as '...' are treated as file/directory names.
    // canonical path should have the following format:
    // start with a single slash

    // Split the path, and filter out any empty strings which may exist between backslashes,
    // or any parts of the path composed solely of the . current directory reference
    const parts = path.split('/').filter(part => part !== '' && part !== '.');

    // Any parent operators should be removed along with the preceding part of the path (thus honoring the parent operator)
    while (parts.some(part => part === '..')) {
        let index = parts.indexOf('..');
        if (index === 0) {
            // This part is at the zero index, and the parent of root is root, so just remove the parent operator.
            parts.splice(0, 1);
        } else {
            // Remove both the .. parent operator and it's preceding path part
            parts.splice(index - 1, 2);
        }
    }

    return `/${parts.join('/')}`;
};
const path = '/a/../../b/../c//.//';
const result = simplifyPath(path);
console.log('!');