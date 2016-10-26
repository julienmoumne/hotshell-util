var prompt = require('../../util.hs.js').prompt

item({desc: 'prompt'}, function () {

    prompt({
        key: 'f', desc: 'find text in files',
        vars: [{name: 'l', prompt: 'location'}, {name: 'p', prompt: 'pattern'}],
        cmd: 'grep -rnws $l -e $p'
    })

    prompt({
        key: 'p', desc: 'check local port',
        vars: [{name: 'p', prompt: 'port'}],
        cmd: 'cat < /dev/tcp/127.0.0.1/$p'
    })
})