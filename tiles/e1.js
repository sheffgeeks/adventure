var scene_contents = {
    sir_alans_money: 5,
    golden_key: 1
};

exports.shortDescription = function (player) {
    // to the north you see...
    return "Sir Alan Sugar";
};

exports.describe = function (player) {
    console.log("Sir Alan is sat behind a conference table looks at you " +
                " with a terrifying stare. On the table is an AMSTRAD emailer."
        );
};

exports.action = function (player, action) {
    if (action[0] === "use" && action[1] === "emailer") {
      useEmailer(player);
    } else if (action[0] === "sue" && action[1] === "alan") {
      if (scene_contents["sir_alans_money"] > 0) {
        scene_contents["sir_alans_money"] -= 1;
      } else {
        for (var i = 0; i < 9000; i++) {
          console.log("££££££££££££££££££££££££££££££££££££££££££££££");
        }
        console.log("I have nothing left but this golden key, just take it and leave me alone you muppet.");
        if (scene_contents["golden_key"] > 0) {
          scene_contents["golden_key"] -= 1;
          if (player.inventory["golden key"]) {
            player.inventory["golden key"] += 1;
          } else {
            player.inventory["golden key"] = 1;
          }
        }
      }
      console.log("After a long, complex court case you are awarded a controlling share in AMSTRAD. Sir Alan is sad.");
      console.log("Sir Alan has " + scene_contents["sir_alans_money"] + " million pounds left" );
    } else {
      console.log("Sorry, I don't understand");
    }
};

function useEmailer(player) {
    console.log("You suffer a serious, life-threatening electric shock. Sir Alan is worried you will sue him");
}
