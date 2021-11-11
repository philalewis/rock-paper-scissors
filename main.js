var humanScore = document.querySelector('#humanScore');
var computerScore = document.querySelector('#computerScore');
var classicGame = document.querySelector('#classic');
var difficultGame = document.querySelector('#difficult');
var gameChoiceContainer = document.querySelector('.game-choice-container')
var classicButtons = document.querySelector('.classic-buttons');
var difficultButtons = document.querySelector('.difficult-buttons');
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
var parsedHumanData;
var parsedComputerData;

window.onload = function() {
  var retrievedHumanData = localStorage.getItem('human')
  var retrievedComputerData = localStorage.getItem('computer')
  if (retrievedHumanData === null) {
    parsedHumanData = {name: "human", wins: 0}
  } else {
    parsedHumanData = JSON.parse(retrievedHumanData);
  }
  if (retrievedComputerData === null) {
    parsedComputerData = {name: "computer", wins: 0}
  } else {
    parsedComputerData = JSON.parse(retrievedComputerData);
  }
  humanScore.innerText = `Score: ${parsedHumanData.wins}`;
  computerScore.innerText = `Score: ${parsedComputerData.wins}`;
}

classicGame.addEventListener('click', makeNewClassicGame);
difficultGame.addEventListener('click', makeNewDifficultGame);


function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function makeNewClassicGame() {
  currentGame = new Game(parsedHumanData, parsedComputerData, 'difficult')
  hide(gameChoiceContainer);
  show(classicButtons);
}

function makeNewDifficultGame() {
  currentGame = new Game(parsedHumanData, parsedComputerData, 'difficult')
  hide(gameChoiceContainer);
  show(difficultButtons);
}

function playClassicGame() {
  
}

function playDifficultGame() {

}












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