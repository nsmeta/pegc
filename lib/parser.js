module.exports = inferParser;

const string = require('./parsers/string');
const regex = require('./parsers/regex');
const seq = require('./combinators/seq');

function inferParser (pattern) {
    if (pattern === undefined || pattern === null) {
        throw 'Pattern cannot be undefined or null';
    }

    if (pattern.constructor === Function) {
        return pattern;
    }

    if (pattern.constructor === String) {
        return string(pattern);
    }

    if (pattern.constructor === RegExp) {
        return regex(pattern);
    }

    if (pattern.constructor === Array) {
        const args = pattern.map(inferParser);

        return seq(...args);
    }

    throw `Pattern not recognised: ${pattern}`;
}
