var scene_contents = {
    mushrooms: 3
};

exports.shortDescription = function (player) {
    return 'a shady glade';
};

exports.describe = function (player) {
    console.log("You are in a shady woodland glade.");
    if (scene_contents.mushrooms) {
        console.log(
            "There are %s mushrooms growing here",
            scene_contents.mushrooms
        );
    }
};

exports.action = function (player, action) {
    if (/eat|use/.test(action[0]) && /mushrooms?/.test(action[1])) {
        if (!scene_contents.mushrooms) {
            console.log('What mushrooms?');
            return;
        }
        console.log(
            'You eat the mushroom. It has bits of soil on ' +
            'it and you feel quite odd.'
        );
        player.mushroom_counter = 4;
        scene_contents.mushrooms--;
        var _move = player.move;
        player.move = function () {
            if (player.mushroom_counter) {
                player.mushroom_counter--;
            }
            return _move.apply(this, arguments);
        };
        console.log = mushroom_log;
    }
    else {
        console.log("Sorry, I don't understand.")
    }
};

var player = require('../lib/player');
var _log = console.log;
function mushroom_log(str) {
    var args = Array.prototype.slice.call(arguments, 1);
    var str2 = require('ansi-rainbow').r(str);
    if (player.mushroom_counter <= 0) {
        console.log = _log;
    }
    return _log.apply(this, [str2].concat(args));
}
