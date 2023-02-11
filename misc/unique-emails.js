/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    const resolveLocalName = (localName) => {
        return localName.split('+')[0].replace(/\./g, '');
    };

    // Iterate over the set of email addresses, building a map whose keys are recognized domain names, and whose values
    // are sets describing the local names recognized for that domain name.
    const emailAddressesByDomain = new Map();
    let localName, domainName;
    for (const email of emails) {
        [localName, domainName] = email.split('@');
        localName = resolveLocalName(localName);
        if (!emailAddressesByDomain.has(domainName)) {
            emailAddressesByDomain.set(domainName, new Set( [localName] ));
        } else {
            emailAddressesByDomain.get(domainName).add(localName);
        }
    }

    let emailCount = 0;

    for (const domain of emailAddressesByDomain.keys()) {
        emailCount += emailAddressesByDomain.get(domain).size;
    }
    return emailCount;
};

const emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];
const result = numUniqueEmails(emails);
console.log('!');
