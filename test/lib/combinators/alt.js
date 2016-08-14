/* globals describe, it */

const should = require('should');

const alt = require('../../../lib/combinators/alt');
const string = require('../../../lib/parsers/string');

module.exports = () => {
    describe('alt combinator', () => {

        const pGreet = alt(string('hello'), string('goodbye'));

        it('alt("hello", "goodbye")("hello world") => [ ["hello", " world"] ]', () => {
            should(pGreet('hello world')).deepEqual([['hello', ' world']]);
        });

        it('alt("hello", "goodbye")("goodbye world") => [ ["goodbye", " world"] ]', () => {
            should(pGreet('goodbye world')).deepEqual([['goodbye', ' world']]);
        });

        it('alt("hello", "goodbye")("hi world") => [ ]', () => {
            should(pGreet('hi world').length).equal(0);
        });

    });
};
