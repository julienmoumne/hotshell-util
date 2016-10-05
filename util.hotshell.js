exports.prompt = function (config) {
    var cmd = ''
    _(config.vars).each(function (el) {
        cmd += 'echo -n "' + el.prompt + ': "; read ' + el.name + '; '
    })
    config.cmd = cmd + config.cmd;
    item(config)
}