var hands = ['rock', 'paper', 'scissors'];

function getHand(){
	return hands[Math.floor(Math.random() * 3)];
}

var player1 = {
	name: "Bill",
	getHand: getHand,
}

var player2 = {
	name: "Bob",
	getHand: getHand,
}

function playRound(playerA, playerB) {
	var handA = playerA.getHand();
	var handB = playerB.getHand();

	console.log("Bills: ", handA)
	console.log("Bobs: ", handB)

	if (handA === handB) {
		console.log("it's a tie");
		return null;
	}

	if (handA === 'rock') {
		if(handB === 'paper') {
			console.log(playerB.name);
			return playerB;
		}
		console.log(playerA.name);
		return playerA;
	}
	
	if (handA === 'paper') {
		if(handB === 'scissors') {
			console.log(playerB.name);
			return playerB;
		}
		console.log(playerA.name);
		return playerA;
	}

	if (handA === 'scissors') {
		if(handB === 'rock') {
			console.log(playerB.name);
			return playerB;
		}
		console.log(playerA.name);
		return playerA;
	}
}

function playGame(playerA, playerB, playUntil){
	var winsA = 0;
	var winsB = 0;

	while((winsA < playUntil) && (winsB < playUntil)){
		var round = playRound(playerA, playerB);
		if (round === playerA) {
			winsA ++;
		} else if (round === playerB) {
			winsB ++;
		}
	}

	if(winsA === playUntil) return playerA
	return playerB
}

console.log("The winner is " + playGame(player1, player2, 5).name);
