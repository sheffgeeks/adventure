var prompt = require('./prompt');
var _ = require('lodash');


// these are simply removed from results
exports.prepositions = [
    'up', 'down', 'on', 'over', 'under', 'in', 'at', 'to',
    'with', 'above', 'below', 'a'
];

// words on the right are normalised to words on the left
exports.words = {
    move: ['move','walk','go','run'],
    give: ['give', 'feed', 'present'],
    use: ['eat', 'use', 'wear'],
    fight: ['fight', 'kill', 'hit', 'attack'],
    drop: ['drop'],
    look: ['look', 'inspect', 'examine'],
    take: ['pick', 'take', 'get', 'collect'],
    inventory: ['inventory', 'possessions', 'belongings', 'bag'],
    north: ['n', 'north'],
    south: ['s', 'south'],
    west: ['w', 'west'],
    east: ['e', 'east']
};

// returns a normalised lower-case array of words
exports.prompt = function () {
    var action = [];
    while (action.length === 0) {
        action = _.compact(prompt('> ').toLowerCase().split(' '));
        action = _.reject(action, function (word) {
            return _.contains(exports.prepositions, word);
        });
        action = action.map(function (word) {
            for (var k in exports.words) {
                if (_.contains(exports.words[k], word)) {
                    return k;
                }
            }
            return word;
        });
    }
    return action;
};
