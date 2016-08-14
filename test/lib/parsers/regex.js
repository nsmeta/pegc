/* globals describe, it */

const should = require('should');

const regex = require('../../../lib/parsers/regex');

module.exports = () => {
    describe('regex parser', () => {
        const pDigits = regex(/[0-9]+/);

        it('regex(/[0-9]+/)("abc123") => [ ]', () => {
            should(pDigits('abc123').length).equal(0);
        });

        it('regex(/[0-9]+/)("123abc") => [ ["123", "abc"] ]', () => {
            const output = pDigits('123abc');
            const [head, tail] = output[0];

            should(head).equal('123');
            should(tail).equal('abc');
        });

        it('regex()("123abc") => [ ["", "123abc"] ]', () => {
            const parser = regex();
            const output = parser('123abc');
            const [head, tail] = output[0];

            should(head).equal('');
            should(tail).equal('123abc');
        });


    });
};
