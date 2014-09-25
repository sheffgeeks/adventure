exports.shortDescription = function (player) {
    // to the north you see...
    return "a large shape, and hear a low pitched growl";
};

var originalMove;
var fed = false;

exports.describe = function (player) {
    if (!originalMove) {
        originalMove = player.move;
    }
    console.log(
        "You are confronted with a gigantic fox. It's on fire. \n" +
        "It seems unperturbed with the fact that it is on fire. \n" +
        "It can also speak, and it says: \n"
    );
    if (!fed) {
        console.log('"Hello. I\'m hungry."');
        player.move = function(direction) {
            if (direction != "south") {
                console.log("The fox looks stern.");
                console.log('"Where are you going?"');
            } else {
                player.move = originalMove;
                return player.move(direction);
            }
        };
    } else {
        player.move = originalMove;
        console.log('"Thanks, you can go now."');
    }
};

exports.action = function (player, action) {
    if (action[0] == "give" && action[1] == "hot"
        && action[2] == "burrito"
        && player.inventory["hot burrito"]) {

        delete player.inventory["hot burrito"];
        fed = true;
        player.move = originalMove;
        console.log("The fox looks thoughful.");
        console.log('"nom nom nom"');
        console.log('I guess we can probably leave now.');
    } else {
        console.log("The fox looks especially stern.");
        console.log('"What are you doing?"');
    }
};
