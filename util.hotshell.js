exports.prompt = function (config) {
    var cmd = ''
    _(config.vars).each(function (el) {
        cmd += 'echo -n "' + el.prompt + ': "; read ' + el.name + '; '
    })
    config.cmd = cmd + config.cmd;
    item(config)
}

exports.confirm = function (config) {
    config.cmd =
        'read -r -p "Are you sure? [y/n] " resp; ' +
        'if [[ $resp = y ]]; ' +
        'then ' + config.cmd + '; ' +
        'fi';
    item(config)
}