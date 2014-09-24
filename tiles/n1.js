exports.shortDescription = function (player) {
    // to the north you see...
    return 'a bouncy castle';
};

exports.longDescription = function (player) {
    return 'You step onto a bouncy castle. It is very bouncy.';
};

exports.action = function (player, action) {
    console.log('Bouncy castle: ' + action.join(', '));
};
