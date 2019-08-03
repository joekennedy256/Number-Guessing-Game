// create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
 

//check if guess is right
if(Number(guess) === secretNumber) {
    alert("You got it right!");
 }

//otherwise, you got it wrong
else if(Number(guess) > secretNumber) {
    alert("Too high. Guess again!")

}
else {
    alert("Too low. Guess again!")

}

}
