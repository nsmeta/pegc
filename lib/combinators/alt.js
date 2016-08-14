module.exports = alt;

function alt (...parsers) {
    return (function (input) {
        for (let i = 0; i < parsers.length; i++) {
            const output = parsers[i](input);

            if (output.length) {
                return output;
            }
        }

        return [];
    });
}
