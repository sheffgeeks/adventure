exports.shortDescription = function (player) {
    // to the north you see...
    return 'an example room';
};

exports.longDescription = function (player) {
    return 'You enter an example room, everything is example-like.';
};

exports.action = function (player, action) {
    console.log('Example room: ' + action.join(', '));
};
