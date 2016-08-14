module.exports = string;

function string (pattern) {
    const patternLength = pattern.length;

    return (function (input) {
        if (input.substr(0, patternLength) === pattern) {
            return [ [pattern, input.substring(patternLength)] ];
        }

        return [];
    });
}
