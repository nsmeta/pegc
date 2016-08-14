module.exports = seq;

function seq (...parsers) {
    return (function (input) {
        let res = [];

        for (let i = 0; i < parsers.length; i++) {
            const parser = parsers[i];
            const output = parser(input);

            if (!output.length) {
                return output;
            }

            res = res.concat(output);
        }

        return res;
    });
}
