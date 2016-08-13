const should = require('should');
const memoise = require('../../lib/memoise');

module.exports = () => {
    describe('lib/memoise', () => {

        const memRandomNumber = memoise(randomNumber);

        it('should cache results', () => {
            const r = memRandomNumber(123);

            should(memRandomNumber(123)).equal(r);
        });

        it('should cache results based on the first argument only', () => {
            const r = memRandomNumber(234, 'abc');

            should(memRandomNumber(234, 'def')).equal(r);
        });

        it('should return different result on different key argument', () => {
            const r = memRandomNumber('abc');

            should(memRandomNumber('def')).not.equal(r);
        });

    });
};

function randomNumber (keyArg) {
    return ~~(Math.random() * 100);
}
