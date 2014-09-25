exports.shortDescription = function (player) {
    // to the north you see...
    return "the air wobble in the heat, it feels warm that way";
};

exports.describe = function (player) {
    console.log(
        "You are confronted with a glowing archway of fire, the heat is " +
        "excruciating. In the distance to the north you can see a volcano " +
        "gently oozing lava. " +
        "As you inspect the area the fire surges up around you, enfuling you " +
        "entirely. \n\n"
    );
    player.setLocation("s3e2");
};

exports.action = function (player, action) {

};
