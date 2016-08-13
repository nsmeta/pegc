const LIB_TESTS = [
    'memoise'
];

LIB_TESTS.forEach((testName) => {
    require(`./lib/${testName}`)();
});
