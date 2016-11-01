var assert = require('assert');
var util = require("rewire")('./util.hs.js');

util.__set__("_", require('underscore'));
util.__set__("item", function item(config) {
    util.result = config;
});

describe('util', function () {
    describe('#confirm()', function () {
        it('should wrap the command with a \'read\' and a \'if\' statement', function () {
            util.confirm({key: 't', desc: 'desc', cmd: 'cmd'})
            assert.deepEqual(
                {
                    key: 't',
                    desc: 'desc',
                    cmd: 'read -r -p "Are you sure? [y/n] " resp; if [[ $resp = y ]]; then cmd; fi'
                },
                util.result
            );
        });
    });
    describe('#prompt()', function () {
        it('should prefix the command with combinations of \'echo\' and \'read\' statements', function () {
            util.prompt({
                key: 't',
                desc: 'desc',
                vars: [{name: 'n1', prompt: 'p1'}, {name: 'n2', prompt: 'p2'}],
                cmd: 'cmd'
            })
            assert.deepEqual(
                {
                    key: 't',
                    desc: 'desc',
                    vars: [{name: 'n1', prompt: 'p1'}, {name: 'n2', prompt: 'p2'}],
                    cmd: 'echo -n \"p1: \"; read n1; echo -n \"p2: \"; read n2; cmd'
                },
                util.result
            );
        });
    });
});