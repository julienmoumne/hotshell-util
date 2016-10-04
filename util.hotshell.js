exports.prompt = function (config) {
    var cmd = '';
    _(config.vars).each(function (el) {
        cmd += 'echo -n "' + el.prompt + ': "; read ' + el.name + '; ';
    })
    return cmd + config.cmd;
}