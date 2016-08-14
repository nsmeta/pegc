module.exports = regex;

function regex (pattern) {
    return (function (input) {
        const re = new RegExp(pattern && pattern.source ? pattern.source : '', 'gm');
        const match = re.exec(input);

        // Should match from the start of the input
        if (match.index) {
            return [];
        }

        return [ [match[0], input.substring(re.lastIndex)] ];
    });
}
