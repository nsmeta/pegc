/* globals describe, it */

const should = require('should');

const inferParser = require('../../lib/parser');
const string = require('../../lib/parsers/string');
const regex = require('../../lib/parsers/regex');
const seq = require('../../lib/combinators/seq');

module.exports = () => {
    describe('parser', () => {

        it('parser(undefined | null | Number | { ... }) => Exception', () => {

            should(() => {
                inferParser();
            }).throw();

            should(() => {
                inferParser(null);
            }).throw();

            should(() => {
                inferParser(123);
            }).throw();

            should(() => {
                inferParser({ abc: 123 });
            }).throw();

        });

        it('parser("abc") == string("abc")', () => {
            const pattern = 'abc';
            const input = 'abcdef';
            const parser = inferParser(pattern);
            const stringParser = string(pattern);

            should(parser(input)).deepEqual(stringParser(input));
        });

        it('parser(/[0-9]+/) == regex(/[0-9]+/)', () => {
            const pattern = /[0-9]+/;
            const input = '123abc';
            const parser = inferParser(pattern);
            const regexParser = regex(pattern);

            should(parser(input)).deepEqual(regexParser(input));
        });

        it('parser(["hello", " world")) == seq(string("hello"), string("world"))', () => {
            const parser = inferParser(['hello', ' world']);
            const seqParser = seq(string('hello'), string(' world'));
            const input = 'hello world123';

            should(parser(input)).deepEqual(seqParser(input));
        });

    });
};
