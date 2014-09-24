exports.shortDescription = function (player) {
    // to the north you see...
    return "a winding path";
};

exports.describe = function (player) {
    console.log("The path winds through dense forest.");
};

exports.action = function (player, action) {
    console.log("Sorry, I don't understand");
};
