var item = require('hotshell').item
var exec = require('hotshell').exec
var confirm = require('../../util.hs.js').confirm

var linux = exec('uname').indexOf('Linux') > -1
var browser = linux ? 'sensible-browser' : 'open'
item({desc: 'confirm'}, function () {
    confirm({
        key: 'o', desc: 'open hotshell website',
        cmd: browser + ' http://julienmoumne.github.io/hotshell'
    })
})