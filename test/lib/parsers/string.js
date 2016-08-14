/* globals describe, it */

const should = require('should');

const string = require('../../../lib/parsers/string');

module.exports = () => {

    describe('string parser', () => {

        it('string("hello")("hello world") => [ ["hello", " world"] ]', () => {
            const parser = string('hello');
            const output = parser('hello world');
            const [head, tail] = output[0];

            should(head).equal('hello');
            should(tail).equal(' world');
        });

        it('string("hello")("invalid input") => [ ]', () => {
            const parser = string('hello');
            const output = parser('invalid input');

            should(output.length).equal(0);
        });

        it('string("")("input") => [ ["", "input"] ]', () => {
            const parser = string('');
            const output = parser('input');
            const [head, tail] = output[0];

            should(head).equal('');
            should(tail).equal('input');
        });

    });

};
