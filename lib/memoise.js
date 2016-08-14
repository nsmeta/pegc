module.exports = memoise;

function memoise (fn) {
    const memTable = {};

    return (function () {
        const args = [...arguments];
        const keyArg = args[0];

        if (memTable[keyArg]) {
            return memTable[keyArg];
        }

        return (memTable[keyArg] = fn.apply(null, args));
    });
}
