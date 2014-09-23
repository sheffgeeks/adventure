exports.parseLocation = function (location) {
    var point = {n: 0, e: 0, s: 0, w: 0};
    if (location === 'start') {
        return point;
    }
    var chars = location.split('');
    while (chars.length) {
        var c = chars.shift();
        point[c] = Number(chars.shift());
    }
    return point;
};

exports.formatLocation = function (point) {
    var location = '';
    ['n','s','e','w'].forEach(function (k) {
        if (point[k] > 0) {
            location += k + point[k];
        }
    });
    return location || 'start';
};

exports.shiftLocation = function (from, to) {
    return function (location) {
        var point = exports.parseLocation(location);
        if (point[from] > 0) {
            point[from]--;
        }
        else {
            point[to]++;
        }
        return exports.formatLocation(point);
    };
};

exports.north = exports.shiftLocation('s', 'n');
exports.south = exports.shiftLocation('n', 's');
exports.east = exports.shiftLocation('w', 'e');
exports.west = exports.shiftLocation('e', 'w');
