var util = require('../../util.hs.js')
var confirm = util.confirm
var prompt = util.prompt

item({desc: 'chained'}, function () {
    prompt(
        confirm({
            key: 'p', desc: 'open a website - prompt for URL then ask for confirmation',
            cmd: 'open $l',
            vars: [{name: 'l', prompt: 'location'}],
        }, false)
    )
    confirm(
        prompt({
            key: 'c', desc: 'open a website - ask for confirmation then prompt for URL',
            cmd: 'open $l',
            vars: [{name: 'l', prompt: 'location'}],
        }, false)
    )
    // factor the chain
    confirmThenPrompt({
        key: 'f', desc: 'open a website - ask for confirmation then prompt for URL',
        cmd: 'open $l',
        vars: [{name: 'l', prompt: 'location'}],
    })
    function confirmThenPrompt(config) {
        confirm(prompt(config, false))
    }
})