var scene_contents = {
  golden_key: 1
};

exports.shortDescription = function (player) {
  // to the north you see...
  return "a pool of water";
};

exports.describe = function (player) {
  console.log("A small gravel path passes around a very calm lake. " +
              "The water seems still, but you can't see to the bottom. " +
              "You feel like you're being watched...");
};

exports.action = function (player, action) {
  if (action[0] === "look" && action[1] === "water") {
    if (Math.floor((Math.random() * 100) + 1) > 65) {
      console.log("You sense a chill in the air, and a voice howls in the wind.");
    } else {
      console.log("The lake shimmers slightly in the breeze. " +
                  "You see a faint glint near the centre of the water. ");
    }
  } else if (action[0] === "swim") {
    console.log("You dive into the lake headfirst, and the cold overcomes you. " +
                "You come up for air and pause for a moment. Then, all of a sudden " +
                "you see the key! It's underneath you, but you'll need to dive to get it.");
  } else if (action[0] === "dive") {
    console.log("You take a large breath and plunge into the depths. " +
                "A strong current tries to throw you around, and you struggle against it. " +
                "You see the key below you! It's within arm's reach!");
  } else if (action[0] === "grab" && action[1] === "key") {
    console.log("You reach out and grab the key");
    pickUpKey();
  } else if (action[0] === "drink") {
    player.increaseHydration(10);
    player.increaseHealth(10);
  } else {
    console.log("Sorry, I don't understand");
  }
}

function pickUpKey(player) {
  if (scene.contents["golden key"] > 0) {
      if (!player.inventory["golden key"]) {
          player.inventory["golden key"] = 1;
      }
      else {
          player.inventory["golden key"] += 1;
      }
      scene_contents["golden key"] -= 1;
      console.log(
          "You put the golden key in your bag. That could come in useful."
      );
    }
    else {
        console.log("You already collected the golden key.")
    }
  }
};