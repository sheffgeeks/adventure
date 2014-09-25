var pcWorking = true;

exports.shortDescription = function (player) {
    // to the north you see...
    return "An obsolete Amstrad PC.";
};

exports.describe = function (player) {
    console.log("There doesn't seem to be anything interesting here except for the Amstrad. There is no visible source of power for it, but it is running.");
};

exports.action = function (player, action) {
    if (action[0] === "use" && action[1] === "pc") {
        usePC(player);
    }
    else if (action[0] === "type" && action[1] === "key") {
	displayKeyLocation(player);
    }
    else if (action[0] === "type" && action[1] === "money") {
	displayMoneyResponse(player);
    }
    else {
        console.log("Sorry, I don't understand.")
    }

};

function usePC(player){
    if(pcWorking){
	console.log("The PC displays a prompt: What do you desire?");
    }
    else{
	showNoPcMessage();
    }
}

function displayKeyLocation(player){
    
    if(pcWorking){
    
	console.log("Alan Sugar has the key, the password is 'You're fired!'" + 
	"The PC shuts down and smoke starts pouring from the back");
    
        if (!player.inventory["amstradPassword"]) {
            player.inventory["amstradPassword"] = 1;
        }
        else {
            player.inventory["amstradPassword"] += 1;
        }
	pcWorking = false;
    }
    else{
	showNoPcMessage();
    }

}

function displayMoneyResponse(player){
    if(pcWorking) {
	console.log("You got to spend money to make money. " + 	
	"Stop wasting your time on these silly games and get a job. " + 
	"By your age I'd already made my first million.");
    }
    else{
	showNoPcMessage();
    }
}

function showNoPcMessage(){
    console.log("The PC shows no signs of life...");
}
