var location = require('./location');
var tiles = require('./tiles');

var player = module.exports;

player.name = '';
player.location = '';
player.inventory = {};

player.printInventory = function () {
    var items = Object.keys(player.inventory);
    if (items.length === 0) {
        console.log ('You have nothing.');
        return;
    }
    console.log('You have:');
    items.forEach(function (item) {
        console.log('%s (%d)', item, player.inventory[item]);
    });
};

player.setLocation = function (location) {
    if (location !== player.location) {
        if (tiles.exists(location)) {
            player.location = location;
            player.tile = tiles.load(location);
            console.log(player.tile.longDescription(player));
            console.log('\n' + tiles.describeAdjacent(player, location));
        }
        else {
            console.log(
                'The undergrowth in that direction is impenetrable. ' +
                'You turn back.'
            );
        }
    }
};

player.move = function (direction) {
    var l = location.move(direction, player.location);
    player.setLocation(l);
};
