
var wins = 0;
var losses = 0;
//array with the list of all the student
//check for the lem
document.onkeyup = function(event){
	var userGuess = event.key.toUpperCase();
	document.getElementById('yourChoose').innerHTML = 'your choose '+ userGuess;

var array =["A","B","C","D","E","F","G","H","E","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];
var computerGuess = array[Math.floor(Math.random() * array.length)];
document.getElementById('Computer').innerHTML = 'the Computer choose '+computerGuess;

	if (computerGuess === userGuess){
		wins++;
		document.getElementById('wins').innerHTML = 'wins '+wins;
	}
	else if(computerGuess !== userGuess){
		losses++;
	document.getElementById('losses').innerHTML = 'losses' +losses;
	}
}
