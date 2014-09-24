var prompt = require('prompt-sync');

module.exports = function (msg) {
    process.stdout.write(msg + ' ');
    return prompt();
};
