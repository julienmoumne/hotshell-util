item({desc: 'hotshell-util'}, function () {
    
    item({key: 'e', desc: 'examples'}, function () {

        _(exec('ls examples/**/*.js').split('\n')).each(function (el, ix) {
            item({key: ix, desc: el, cmd: 'hs --chdir -f ' + el})
        })
    })
})