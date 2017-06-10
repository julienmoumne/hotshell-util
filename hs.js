var item = require('hotshell').item
var exec = require('hotshell').exec
var _ = require('underscore')

item({desc: 'hotshell-util'}, function () {
    item({key: 'e', desc: 'examples'}, function () {
        _(exec('ls examples/**/*.js').split('\n')).each(function (el, ix) {
            var name = basename(el)
            var dir = dirname(el)
            item({key: ix, desc: dir, cmd: 'cd ' + dir + '; hs -f ' + name})
        })
    })
    item({key: 't', desc: 'run tests', cmd: 'npm test'})
    item({key: 'i', desc: 'install dependencies', cmd: 'npm install'})
    item({key: 'r', desc: 'release new version', cmd: './release.sh'})
})

function basename(path) {
    return path.replace(dirname(path), "")
}

function dirname(path) {
    return path.match(".*/")[0]
}