exports.shortDescription = function (player) {
    return "rolling sand dunes.";
};

exports.describe = function (player) {
    console.log("You walk for miles through the rolling sand dunes.");
    player.depleteHydration();
    console.log("Thinking you are about to die from dehydration, you come across an oasis.");
    console.log("Surrounded by palm trees, this little bit of paradise draws you in like a cat to a piece of string.");
    player.depleteHydration();
    console.log("There might be something useful in the cool waters, but you might need to investigate.");
    player.showStats();
};

exports.action = function (player, action) {
    if (action[0] === "drink" && action[1] === "water") {
        console.log("You drink from the oasis. But this only offers a small respite.");
        player.increaseHydration();
        player.increaseHydration();
    }

    if (action[0] === "investigate") {
        console.log("You dive into the cool waters searching for something to help you in your adventure!\n");
        console.log("Feeling a slight pull on your legs, you find it difficult to swim to the surface.");
        console.log("You struggle for some time before being sucked to the bottom of the oasis.");
        player.depleteHealth();
        player.depleteHealth();
        player.depleteHealth();
        player.depleteHealth();
        player.depleteHealth();
        console.log("You pass out and, coming to your senses, find yourself in a completely different area.");
        player.setLocation("s1");
    }

    player.depleteHydration();
    player.showStats();
};
