var player = require('./player');
var prompt = require('./prompt');


var name = prompt.question('What is your name?');
player.name = name;

console.log('Hi, ' + player.name + '\n');

// variable that stores the input passed back from tiles
var next_action;

// enter the start room
player.setLocation('start');


// main game loop
while (true) {

    // get normalised input from user
    var action = next_action || prompt.action();

    // if it's a move action, move the player
    if (action[0] === 'move') {
        player.move(action[1]);
    }
    // list contents of inventory
    else if (action[0] === 'look' && action[1] === 'inventory') {
        player.printInventory();
    }
    // end the program when user quits
    else if (action[0] === 'quit') {
        console.log('Bye.');
        process.exit(0);
    }
    // send the input to the current tile
    else {
        next_action = player.tile.action(player, action);
    }

}
