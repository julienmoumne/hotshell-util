var assert = require('assert');
var util = require("rewire")('./util.hs.js');

util.__set__("_", require('underscore'));
util.__set__("item", function item(config) {
    util.results.push(config);
});

beforeEach(function() {
    util.results = []
});

describe('util', function () {
    describe('#confirm(config)', function () {
        it('should wrap the command with a \'read\' and a \'if\' statement', function () {
            var expected = {
                key: 't',
                desc: 'desc',
                cmd: 'read -r -p "Are you sure? [y/n] " resp; if [[ $resp = y ]]; then cmd; fi'
            };
            validateConfig(expected, util.confirm({key: 't', desc: 'desc', cmd: 'cmd'}))
        })
    })
    describe('#prompt(config)', function () {
        it('should prefix the command with combinations of \'echo\' and \'read\' statements', function () {
            var expected = {
                key: 't',
                desc: 'desc',
                vars: [{name: 'n1', prompt: 'p1'}, {name: 'n2', prompt: 'p2'}],
                cmd: 'echo -n \"p1: \"; read n1; echo -n \"p2: \"; read n2; cmd'
            };
            validateConfig(expected, util.prompt({
                key: 't',
                desc: 'desc',
                vars: [{name: 'n1', prompt: 'p1'}, {name: 'n2', prompt: 'p2'}],
                cmd: 'cmd'
            }))
        })
    })
    describe('#prompt(confirm(config, false))', function () {
        it('should add only one item', function () {
            util.prompt(util.confirm({
                key: 't',
                desc: 'desc',
                cmd: 'cmd'
            }, false))
            assert.equal(1, util.results.length)
        })
    })
});

function validateConfig(expected, actual) {
    assert.deepEqual(expected, actual);
    assert.deepEqual([expected], util.results);
}