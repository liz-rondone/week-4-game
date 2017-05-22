var targetNumber = "";
var counter = 0;
var won = 0;
var loss = 0;
var valueCrystal = "";	// data-crystalValue
var purpleCrystal, blueCrystal, whiteCrystal, greenCrystal;
var crystalArray = [purpleCrystal, blueCrystal, whiteCrystal, greenCrystal];



function startGame() {	//no argument
	targetNumber = getRandomArbitrary(19,120);
	purpleCrystal = getRandomArbitrary(1,12);
	blueCrystal = getRandomArbitrary(1,12);
	whiteCrystal = getRandomArbitrary(1,12);
	greenCrystal = getRandomArbitrary(1,12);
	valueCrystal = getRandomArbitrary(1,12);
	counter = 0;
	$("#counter").text(counter);
	$("#target-number").text(targetNumber);
	console.log(purpleCrystal);
	console.log(blueCrystal);
	console.log(whiteCrystal);
	console.log(greenCrystal);
}

function getRandomArbitrary(min, max) { //orange is argument
	return Math.floor(Math.random() * (max - min)) + min; //return ends function. don't put anything afterwards
}

startGame();


$(".img-responsive").on("click", function() {
	counter += 10; //replace with random number function

	crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    if (counter === targetNumber) {
      document.querySelector('#endGameMessage').innerHTML = "Congratulations! You're a rockstar."
    }

    else if (counter >= targetNumber) {
      document.querySelector('#endGameMessage').innerHTML = "Whoops! You're just a rock."
    }

});
