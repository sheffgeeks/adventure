var fs = require('fs');
var path = require('path');
var location = require('./location');


exports.filename = function (loc) {
    return path.resolve(__dirname, '../tiles/' + loc + '.js');
};

exports.load = function (loc) {
    delete require.cache[exports.filename(loc)];
    return require(exports.filename(loc));
};

exports.exists = function (loc) {
    return fs.existsSync(exports.filename(loc));
};

exports.describeAdjacent = function (player) {
    var loc = player.location;
    var n = location.north(loc);
    var s = location.south(loc);
    var e = location.east(loc);
    var w = location.west(loc);

    var description = '';
    if (exports.exists(n)) {
        description += 'To the north you see ' +
            exports.load(n).shortDescription(player) + '\n';
    }
    if (exports.exists(s)) {
        description += 'To the south you see ' +
            exports.load(s).shortDescription(player) + '\n';
    }
    if (exports.exists(e)) {
        description += 'To the east you see ' +
            exports.load(e).shortDescription(player) + '\n';
    }
    if (exports.exists(w)) {
        description += 'To the west you see ' +
            exports.load(w).shortDescription(player) + '\n';
    }
    return description;
};
