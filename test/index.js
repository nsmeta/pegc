const LIB_TESTS = [
    'memoise',
    'parser'
];

const COMBINATORS_TESTS = [
    'seq'
];

const PARSERS_TESTS = [
    'string',
    'regex'
];

LIB_TESTS.forEach((testName) => {
    require(`./lib/${testName}`)();
});

PARSERS_TESTS.forEach((testName) => {
    require(`./lib/parsers/${testName}`)();
});

COMBINATORS_TESTS.forEach((testName) => {
    require(`./lib/combinators/${testName}`)();
});
