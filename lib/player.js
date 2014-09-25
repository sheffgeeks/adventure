var location = require('./location');
var tiles = require('./tiles');
var _ = require("lodash");

var player = module.exports;

player.name = '';
player.location = '';
player.inventory = {};
player.stats = {
    hydration: 10,
    health: 10
};

player.depleteHealth = function () {
    if (player.stats.health - 1 <= 0) player.kill();
    console.log("Your health has decreased!");
    player.stats.health -= 1;
    player.showStats();
};

player.increaseHealth = function () {
    if (player.stats.health + 1 >= 10) return;
    console.log("Your health has increased!");
    player.stats.health += 1;
    player.showStats();
};

player.depleteHydration = function () {
    if (player.stats.hydration - 1 <= 10) player.kill();
    console.log("Your hydration level has decreased!");
    player.stats.hydration -= 1;
    player.showStats();
};

player.increaseHydration = function () {
    if (player.stats.hydration + 1 >= 10) return;
    console.log("Your hydration level has increased!");
    player.stats.hydration += 1;
    player.showStats();
};

player.showStats = function () {
    console.log("\nYour current stats are:");
    _.each(player.stats, function (stat, name) {
        console.log( name.substring(0, 1).toUpperCase() + name.substring(1) + "\t" + stat + "/10");
    });
};

player.kill = function () {
    console.log("Death lurks around many corners, but it seems that he has found you round this one.");
    process.exit(1);
}

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
            player.tile.describe(player);
            console.log('\n' + tiles.describeAdjacent(player));
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

player.win = function () {
    console.log('Congratulations!');
    process.exit(0);
};
