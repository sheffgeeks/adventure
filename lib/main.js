var prompt = require('./prompt');
var player = require('./player');
var actions = require('./actions');

var name = prompt('What is your name? ');

console.log('Hi, ' + name);

while (true) {
    var action = actions.prompt();
    console.log(action);
}
