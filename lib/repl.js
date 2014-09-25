var repl = require('repl');

exports.start = function (callback) {
    global.player = require('./player');
    global.tile = player.tile;
    var r = repl.start({prompt: 'js> ', useGlobal: true});
    r.on('exit', callback);
};
