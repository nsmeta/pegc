/* global describe, it */

const should = require('should');

const string = require('../../../lib/parsers/string');
const seq = require('../../../lib/combinators/seq');

module.exports = () => {
    describe('`seq` combinator', () => {
        const pHelloWorld = seq(string('hello'), string(' world'));

        it('seq(...parsers)(valid_input) => [ ...[head, tail] ]', () => {
            const result = pHelloWorld('hello world!');
            const head = result.map( match => match[0] ).join('');
            const tail = result[result.length - 1][1];

            should(head).equal('hello world');
            should(tail).equal('!');

        });

        it('seq(...parsers)(invalid_input) => [ ]', () => {
            const result = pHelloWorld('abc');

            should(result.length).equal(0);
        });

        it('seq()(|input| > 0) => [ ]', () => {
            const result = seq()('abc');

            should(result.length).equal(0);
        });

    });
};
