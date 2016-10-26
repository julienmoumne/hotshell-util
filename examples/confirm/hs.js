var confirm = require('../../util.hotshell.js').confirm

item({desc: 'confirm'}, function () {
    confirm({
        key: 'o', desc: 'open hotshell website',
        cmd: 'open http://julienmoumne.github.io/hotshell'
    })
})