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
            if (action[3] != "hot") {
                console.log("We only do hot.");
            }
            console.log("Have a hot burrito");
            player.inventory["hot burrito"] = 1;
        }
    } else if (action[0] == "love") {
        console.log("The answer to our riddle!");
        console.log("The most important ingredient in " +
            "a burrito is love!");
        console.log("We've actually run out of golden tickets");
        console.log("There is this key someone left lying " +
            "around though");
        console.log("[You received 1 golden key]");
        var keys = player.inventory['golden key'] || 0;
        player.inventory['golden key'] = keys + 1;
    } else {
        console.log("What?");
    }
};
