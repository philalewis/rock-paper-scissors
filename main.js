var humanScore = document.querySelector('#humanScore');
var computerScore = document.querySelector('#computerScore');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');

var choices = document.querySelector('.choice');

var currentGame;

var choices.addEventListener('click', function(event) {
  playGame() {
    var computerChoice = currentGame.computer.takeTurn(buttonClicked);
    var humanChoice = event.target.id;
    
  }
});