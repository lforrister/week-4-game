var randomNumber = 0;
var counter = 0;

newGame();
	
	function newGame() {
		randomNumber = Math.floor(Math.random() * 100) + 1;
	console.log(randomNumber);
	$("#randomButton").text(randomNumber);
	counter === 0;
	redNumber = Math.floor(Math.random() * 20) +1;
	rainbowNumber = Math.floor(Math.random() * 20) +1;
	blueNumber = Math.floor(Math.random() * 20) +1;
	pinkNumber = Math.floor(Math.random() * 20) +1;
};


/* STEP TWO: Use the jQuery click function for each gem. 
Set the function up so that it generates a random number when it's clicked.
Then append that number to the #score button. */

// GEMS:


var scoreLose = 0;
var scoreWin = 0;

$("#score").text(counter);


// --------------------------- //


// RED GEM //


$("#redgem").on("click", function(){
	redNumber = parseInt(redNumber);
	console.log(redNumber);
	counter = counter + redNumber;
	$("#score").text(counter);

	// CHANGE SCORES

	if (counter === randomNumber) {
      alert("You win!");
      newGame();
      counter = 0;
      $("#score").text(counter);
      scoreWin = scoreWin + 1;
      $("#winner").text(scoreWin);
    }

    else if (counter >= randomNumber) {
      alert("You lose!!");
      newGame();
      counter = 0;
      $("#score").text(counter);
      scoreLose = scoreLose + 1;
      $("#loser").text(scoreLose);

    }
	

});

// RAINBOW GEM 

$("#rainbowgem").on("click", function(){
	console.log(rainbowNumber);
	$("#score").text(rainbowNumber);
	counter = counter + rainbowNumber;
	$("#score").text(counter);

	// CHANGE SCORES

	if (counter === randomNumber) {
      alert("You win!");
      newGame();
      counter = 0;
      $("#score").text(counter);
      scoreWin = scoreWin + 1;
      $("#winner").text(scoreWin);
    }

    else if (counter >= randomNumber) {
      alert("You lose!!");
      newGame();
      counter = 0;
      $("#score").text(counter);
      scoreLose = scoreLose + 1;
      $("#loser").text(scoreLose);
    }

});

//BLUE GEM 

$("#bluegem").on("click", function(){
	console.log(blueNumber);
	$("#score").text(blueNumber);
	counter = counter + blueNumber;
	$("#score").text(counter);

	// CHANGE SCORES

	if (counter === randomNumber) {
      alert("You win!");
      newGame();
      counter = 0;
      $("#score").text(counter);
      scoreWin = scoreWin + 1;
      $("#winner").text(scoreWin);

    }

    else if (counter >= randomNumber) {
      alert("You lose!!");
      newGame();
      counter = 0;
      $("#score").text(counter);
      scoreLose = scoreLose + 1;
      $("#loser").text(scoreLose);
    }

});

// PINK GEM 

$("#pinkgem").on("click", function(){
	console.log(pinkNumber);
	$("#score").text(pinkNumber);
	counter = counter + pinkNumber;
	$("#score").text(counter);

	// CHANGE SCORES

	if (counter === randomNumber) {
      alert("You win!");
      newGame();
      counter = 0;
      $("#score").text(counter);
      scoreWin = scoreWin + 1;
      $("#winner").text(scoreWin);
    }

    else if (counter >= randomNumber) {
      alert("You lose!!");
      newGame();
      counter = 0;
      $("#score").text(counter);
      scoreLose = scoreLose + 1;
      $("#loser").text(scoreLose);
    }
	

});












