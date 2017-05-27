var targetNumber = "";
var counter = 0;
var won = 0;
var loss = 0;
//var valueCrystal;	// data-crystalValue
//var purpleCrystal, blueCrystal, whiteCrystal, greenCrystal;
//var crystalArray = [purpleCrystal, blueCrystal, whiteCrystal, greenCrystal];

startGame();

function startGame() {	//no argument
	targetNumber = getRandomArbitrary(19,120);
	var purpleCrystal = getRandomArbitrary(1,12);
	var blueCrystal = getRandomArbitrary(1,12);
	var whiteCrystal = getRandomArbitrary(1,12);
	var greenCrystal = getRandomArbitrary(1,12);
	var crystalValue;
	counter = 0;
	$(".image-responsive").click(crystalValue);
	$("#counter").text(counter);
	$("#target-number").text(targetNumber);
	$("#won-number").text(won);
	$("#loss-number").text(loss);
	$("#purple").attr('data-crystalValue', purpleCrystal);
	$("#blue").attr('data-crystalValue', blueCrystal);
	$("#white").attr('data-crystalValue', whiteCrystal);
	$("#green").attr('data-crystalValue', greenCrystal);
	console.log(purpleCrystal);
	console.log(blueCrystal);
	console.log(whiteCrystal);
	console.log(greenCrystal);
}


function getRandomArbitrary(min, max) { //orange is argument
	return Math.floor(Math.random() * (max - min)) + min; //return ends function. don't put anything afterwards
}


$(".img-responsive").on("click", function() {

	// imageCrystal.attr("data-crystalvalue", numberOptions[i]);
	// Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
	var crystalClicked = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalClicked);
    console.log(crystalValue);
    // We then add the crystalArray to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    $("#counter").text(counter);

    if (counter === targetNumber) {
    	document.querySelector('#endGameMessage').innerHTML = "Congratulations! You're a rockstar."
    	won++;
    	startGame();
    }

    else if (counter >= targetNumber) {
    	document.querySelector('#endGameMessage').innerHTML = "Whoops! You're just a rock."
    	loss++;
    	startGame();
    }

});
