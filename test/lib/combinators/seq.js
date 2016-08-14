/* global describe, it */

const should = require('should');

const seq = require('../../../lib/combinators/seq');

module.exports = () => {
    describe('`seq` combinator', () => {

        it('seq(...parsers)(valid_input) => [ ...[head, tail] ]', () => {
            const pHelloWorld = seq('hello', ' world');
            const result = pHelloWorld('hello world!');
            const [head, tail] = result[0];

            should(head).equal.to('hello world');
            should(tail).equal.to('!');

        });

        it('seq(...parsers)(invalid_input) => [ ]');

        it('seq()(input > 0) => [ ]');

    });
};
