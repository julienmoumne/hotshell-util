var prompt = require('../../util.hotshell.js').prompt

item({desc: 'prompt'}, function () {

    item({key: 'f', desc: 'find text in files', cmd: prompt({
            vars: [{name: 'l', prompt: 'location'}, {name: 'p', prompt: 'pattern'}],
            cmd: 'grep -rnws $l -e $p'
        })
    })

    item({key: 'p', desc: 'check local port', cmd: prompt({
            vars: [{name: 'p', prompt: 'port'}],
            cmd: 'cat < /dev/tcp/127.0.0.1/$p'
        })
    })
})