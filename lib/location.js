exports.parse = function (location) {
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

exports.format = function (point) {
    var location = '';
    ['n','s','e','w'].forEach(function (k) {
        if (point[k] > 0) {
            location += k + point[k];
        }
    });
    return location || 'start';
};

exports.shift = function (from, to) {
    return function (location) {
        var point = exports.parse(location);
        if (point[from] > 0) {
            point[from]--;
        }
        else {
            point[to]++;
        }
        return exports.format(point);
    };
};

exports.north = exports.shift('s', 'n');
exports.south = exports.shift('n', 's');
exports.east = exports.shift('w', 'e');
exports.west = exports.shift('e', 'w');

exports.move = function (direction, location) {
    switch (direction) {
        case 'north': return exports.north(location);
        case 'south': return exports.south(location);
        case 'east': return exports.east(location);
        case 'west': return exports.west(location);
        default:
            console.log('Move %s not recognised', direction);
            return location;
    }
};
