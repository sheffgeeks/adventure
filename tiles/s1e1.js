exports.shortDescription = function (player) {
    // to the north you see...
    return "A jolly looking fellow in a sombrero";
};

exports.describe = function (player) {
    console.log(
        "Hello traveller. I've travelled these lands far and wide " +
        "and not far from here is the best burrito in the lands." +
        "\n" +
        "If you tell them the answer to the following riddle " +
        "they'll give you one of their golden tickets." +
        "\n\n" +
        "What is the most important ingredient in a burrito?"
    );
};

exports.action = function (player, action) {
    console.log("Nothing happens.");
};
