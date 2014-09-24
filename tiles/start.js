var KEYS_NEEDED = 3;

var scene_contents = {
    rope: true,
    keys_used: 0
};

exports.shortDescription = function (player) {
    // to the north you see...
    return "a clearing in the forest";
};

exports.describe = function (player) {
    console.log(
        "You are in a sizeable clearing in the forest. At your feet, you see " +
        "a mysterious trap door, with three golden keyholes. Paths lead off " +
        "in four directions, which your unerring sense of direction tells " +
        "you correspond to the four compass points."
    );
    if (scene_contents.rope) {
        console.log("A short length of rope is lying on the floor.");
    }
};

exports.action = function (player, action) {
    if (action[0] === "use" && action[1] === "key") {
        useKey(player);
    }
    else if (action[0] === "take" && action[1] === "rope") {
        pickUpRope(player);
    }
    else {
        console.log("Sorry, I don't understand.")
    }
};

function useKey(player) {
    if (player.inventory["golden key"] > 0) {
        player.inventory["golden key"] -= 1;
        scene_contents["keys_used"] += 1;
        if (scene_contents["keys_used"] == KEYS_NEEDED) {
            player.win();
        }
        console.log(
            "You put the key in and turn it carefully. " +
            "%s more to go.", (KEYS_NEEDED - scene_contents["keys_used"])
        );
    }
    else {
        console.log("You don't have a golden key to use.");
    }
}

function pickUpRope(player) {
    if (scene_contents["rope"] > 0) {
        if (!player.inventory["rope"]) {
            player.inventory["rope"] = 1;
        }
        else {
            player.inventory["rope"] += 1;
        }
        scene_contents["rope"] -= 1;
        console.log(
            "You put the rope in your bag. That could come in useful."
        );
    }
    else {
        console.log("You already collected the rope.")
    }
}
