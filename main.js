var humanScore = document.querySelector('#humanScore');
var computerScore = document.querySelector('#computerScore');
var classicGame = document.querySelector('#classic');
var difficultGame = document.querySelector('#difficult');
var gameChoiceContainer = document.querySelector('.game-choice-container');
var classicButtons = document.querySelector('.classic-buttons');
var difficultButtons = document.querySelector('.difficult-buttons');
var gameButtons = document.querySelector('.game-buttons');
// var rock = document.querySelector('#rock');
// var paper = document.querySelector('#paper');
// var scissors = document.querySelector('#scissors');
// var lizard = document.querySelector('#lizard');
// var alien = document.querySelector('#alien');
// var predator = document.querySelector('#predator');
// var choice4 = document.querySelector('#choice4');
// var choice5 = document.querySelector('#choice5');
var classicButtons = document.querySelector('.classic-buttons');
var difficultButtons = document.querySelector('.difficult-buttons');
var gameResults = document.querySelector('.game-results');
var displayWinner = document.querySelector('.display-winner');
var changeGameButton = document.querySelector('#changeGame');
var currentGame;
var parsedHumanData;
var parsedComputerData;

window.onload = function() {
  var retrievedHumanData = localStorage.getItem('human');
  var retrievedComputerData = localStorage.getItem('computer');
  if (retrievedHumanData === null) {
    parsedHumanData = {name: "human", wins: 0};
  } else {
    parsedHumanData = JSON.parse(retrievedHumanData);
  }
  if (retrievedComputerData === null) {
    parsedComputerData = {name: "computer", wins: 0};
  } else {
    parsedComputerData = JSON.parse(retrievedComputerData);
  }
  humanScore.innerText = `Score: ${parsedHumanData.wins}`;
  computerScore.innerText = `Score: ${parsedComputerData.wins}`;
}

classicGame.addEventListener('click', makeNewClassicGame);
difficultGame.addEventListener('click', makeNewDifficultGame);
classicButtons.addEventListener('click', playClassicGame);
difficultButtons.addEventListener('click', playDifficultGame);
changeGameButton.addEventListener('click', changeGame)

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function makeNewClassicGame() {
  currentGame = new Game(parsedHumanData, parsedComputerData, 'classic');
  hide(gameChoiceContainer);
  show(gameButtons);
  hide(difficultButtons);
  show(classicButtons);
}

function makeNewDifficultGame() {
  currentGame = new Game(parsedHumanData, parsedComputerData, 'difficult');
  hide(gameChoiceContainer);
  show(gameButtons);
  hide(classicButtons);
  show(difficultButtons);
}

function updateCurrentInfo() {
  var humanWins = currentGame.human.retrieveWinsFromStorage('human');
  var computerWins = currentGame.computer.retrieveWinsFromStorage('computer');
  humanScore.innerText = `Score: ${humanWins}`;
  computerScore.innerText = `Score: ${computerWins}`;
}

function playClassicGame(event) {
  currentGame.humanChoice = currentGame.human.takeTurn('classic', event.target.parentNode.id)
  currentGame.computerChoice = currentGame.computer.takeTurn('classic')
  if (!currentGame.checkForTie()) {
    currentGame.checkForWin();
  }
  currentGame.human.saveWinsToStorage();
  currentGame.computer.saveWinsToStorage();
  updateCurrentInfo();
  diplayWinnerInfo();
}

function playDifficultGame(event) {
  currentGame.humanChoice = currentGame.human.takeTurn('difficult', event.target.parentNode.id)
  currentGame.computerChoice = currentGame.computer.takeTurn('difficult')
  if (!currentGame.checkForTie()) {
    currentGame.checkForWin();
  }
  currentGame.human.saveWinsToStorage();
  currentGame.computer.saveWinsToStorage();
  updateCurrentInfo();
  diplayWinnerInfo();
}

function diplayWinnerInfo() {
  hide(gameButtons);
  var winner = `${currentGame.winner} wins!`
  displayWinner.innerText = winner.toUpperCase();
  show(gameResults);
  setTimeout(function() {
    hide(gameResults);
    show(gameButtons);
  },2000)
  show(changeGameButton);
}

function changeGame() {
  hide(gameButtons);
  hide(changeGameButton);
  show(gameChoiceContainer);
}







// Play a game:
// 6. setTimeout
// 7. return to game
// 8. display change game button