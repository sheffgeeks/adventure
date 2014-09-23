exports.name = 'Anonymous';
exports.inventory = {};
exports.location = 'start';

exports.printInventory = function (player) {
    console.log('You have:');
    for (var k in player.inventory) {
        console.log('%s (%d)', k, player.inventory[k]);
    }
};
