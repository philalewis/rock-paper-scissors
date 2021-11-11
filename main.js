var humanScore = document.querySelector('#humanScore');
var computerScore = document.querySelector('#computerScore');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var lizard = document.querySelector('#lizard');
var alien = document.querySelector('#alien');
var predator = document.querySelector('#predator');
var choice4 = document.querySelector('#choice4');
var choice5 = document.querySelector('#choice5');

var choices = document.querySelectorAll('.choice');

var currentGame;


// choices.addEventListener('click', function(event) {
//   playGame() {
//     var computerChoice = currentGame.computer.takeTurn(buttonClicked);
//     var humanChoice = event.target.id;
    
//   }
// });

// On load, the document retrieves local data and diplays the current score
// window.onload()

// When choice button is clicked, choice buttons should be hidden >
  // Game buttons should be displayed
  // Prompt should change
// A new Game class is insantiated and stored in the currentGame variable
//  
// On choice button click, the player method checkForTie is called. If true, don't update data
// 