var targetNumber = "";
var counter = 0;
var won = 0;
var loss = 0;
var valueCrystal;	// data-crystalValue
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
	$(".image-responsive").click(valueCrystal);
	$("#counter").text(counter);
	$("#target-number").text(targetNumber);
	$("#won-number").text(won);
	$("#loss-number").text(loss);
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

	// Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
	crystalArray = ($(this).attr("#data-valueCrystal"));
    crystalArray = parseInt(crystalArray);
    
    // We then add the crystalArray to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalArray;

    if (counter === targetNumber) {
    	document.querySelector('#endGameMessage').innerHTML = "Congratulations! You're a rockstar."
    	won++;
    }

    else if (counter >= targetNumber) {
    	document.querySelector('#endGameMessage').innerHTML = "Whoops! You're just a rock."
    	loss++;
    }

});
