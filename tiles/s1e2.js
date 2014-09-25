exports.shortDescription = function (player) {
    // to the north you see...
    return "a eastern starts path";
};

exports.describe = function (player) {
    console.log(player.name+" you are moving east and have arrived at " +player.location);
    console.log("Try and make contact with Sir Alan but don't email him - he prefers face-to-face coms.")
    //console.log("You have player"+ player.printInventory());
};

exports.action = function (player, action) {
	if(action[0] === "skype"){
		console.log("Alan has good news for you.  Your email phone is in the post.");
	}else if(action[0] === "facetime"){
    	console.log("Alan is an Amstrad man not of the MAC stuff with all its bashing bugs.");
	}else{
		console.log("Sorry, I can't do that "+player.name+" .Did you try skyping Alan.");
	}
};