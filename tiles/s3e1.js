exports.shortDescription = function (player) {
    // to the north you see...
    return "a small shack, with a hint of mexican spice in the air";
};

exports.describe = function (player) {
    console.log(
        "The shack is brightly decorated in yellow and red. " +
        "The sign outside says they sell burritos, and tacos. " +
        "For free."
    );
};

exports.action = function (player, action) {
    if (action[0] == "take") {
        if (action[1] == "taco") {
            console.log(
                "Why would you order a taco, " +
                "when we have burritos?");
        } else if (action[1] == "burrito") {
            console.log("How spicy do you want it?");
        } else if (action[2] == "burrito") {
            console.log("We only do hot.");
            console.log("Have a hot burrito");
            player.inventory["hot burrito"] = 1;
        }
    }
};
