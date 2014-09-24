var prompt = require('prompt-sync');
var words = require('./words');
var _ = require('lodash');


exports.question = function (msg) {
    process.stdout.write(msg + ' ');
    return prompt();
};

// these are simply removed from action prompt results
exports.prepositions = [
    'up', 'down', 'on', 'over', 'under', 'in', 'at', 'to',
    'with', 'above', 'below', 'a'
];

// returns a normalised lower-case array of words
exports.action = function () {
    var action = [];
    while (action.length === 0) {
        action = _.compact(exports.question('>').toLowerCase().split(' '));
        action = _.reject(action, function (word) {
            return _.contains(exports.prepositions, word);
        });
        action = action.map(function (word) {
            for (var k in words) {
                if (_.contains(words[k], word)) {
                    return k;
                }
            }
            return word;
        });
    }
    return action;
};
