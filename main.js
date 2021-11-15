var humanScore = document.querySelector('#humanScore');
var computerScore = document.querySelector('#computerScore');
var classicalGame = document.querySelector('#classical');
var existentialismGame = document.querySelector('#existentialism');
var gameChoiceContainer = document.querySelector('.game-choice-container');
var classicalButtons = document.querySelector('.classical-buttons');
var existentialismButtons = document.querySelector('.existentialism-buttons');
var gameButtons = document.querySelector('.game-buttons');
var choice = document.querySelectorAll('.choice');
var gameResults = document.querySelector('.game-results');
var displayWinner = document.querySelector('.display-winner');
var changeGameButton = document.querySelector('#changeGame');
var humanChoiceImage = document.querySelector('.human-choice-image');
var computerChoiceImage = document.querySelector('.computer-choice-image');
var winningQuote = document.querySelector('.winning-quote');
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

// Event Listeners
classicalGame.addEventListener('click', makeNewClassicalGame);
existentialismGame.addEventListener('click', makeNewExistentialismGame);
for (var i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', playGame);
}
changeGameButton.addEventListener('click', changeGame);

// Helper functions
function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

// Event Handlers
function makeNewClassicalGame() {
  currentGame = new Game(parsedHumanData, parsedComputerData, 'classical');
  hide(gameChoiceContainer);
  show(gameButtons);
  hide(existentialismButtons);
  show(classicalButtons);
}

function makeNewExistentialismGame() {
  // console.log(event.target.id)
  currentGame = new Game(parsedHumanData, parsedComputerData, 'existentialism');
  hide(gameChoiceContainer);
  show(gameButtons);
  hide(classicalButtons);
  show(existentialismButtons);
}

function updateCurrentInfo() {
  var humanWins = currentGame.human.retrieveWinsFromStorage('human');
  var computerWins = currentGame.computer.retrieveWinsFromStorage('computer');
  humanScore.innerText = `Score: ${humanWins}`;
  computerScore.innerText = `Score: ${computerWins}`;
  winningQuote.innerText = currentGame.winningQuote;
  displayWinner.innerText = `${currentGame.winnerDeclaration}`;
  if (currentGame.winner === 'human') {
    humanChoiceImage.classList.add('human-winner-styling');
  } else if (currentGame.winner === 'computer') {
    computerChoiceImage.classList.add('computer-winner-styling');
  }
}

function playGame(event) {
  currentGame.humanChoice = currentGame.human.takeTurn(currentGame.gameType, event.target.parentNode.id);
  currentGame.computerChoice = currentGame.computer.takeTurn(currentGame.gameType, event.target.parentNode.id);
  currentGame.checkForTie();
  currentGame.checkForWin();
  currentGame.human.saveWinsToStorage();
  currentGame.computer.saveWinsToStorage();
  updateCurrentInfo();
  diplayWinnerInfo();
}

function diplayWinnerInfo() {
  displayResultsView();
  // console.log(currentGame.humanChoiceImage)
  // console.log(currentGame.computerChoiceImage)
  setTimeout(function() {
    // console.log(currentGame.humanChoiceImage)
    // console.log(currentGame.computerChoiceImage)
    displayGameView();
  }, 4000);
}

function displayResultsView() {
  hide(gameButtons);
  changeDisplaySource();
  // console.log(currentGame.humanChoiceImage)
  // console.log(currentGame.computerChoiceImage)
  show(humanChoiceImage);
  show(computerChoiceImage);
  show(gameResults);
  changeGameButton.disabled = true;
}

function displayGameView() {
  hide(gameResults);
  hide(humanChoiceImage);
  hide(computerChoiceImage);
  show(gameButtons);
  show(changeGameButton);
  changeGameButton.disabled = false;
  humanChoiceImage.classList.remove('human-winner-styling');
  computerChoiceImage.classList.remove('computer-winner-styling');
  currentGame.gameReset();
}

function changeDisplaySource() {
  // console.log(currentGame.humanChoiceImage)
  // console.log(currentGame.computerChoiceImage)
  humanChoiceImage.src = currentGame.humanChoiceImage;
  computerChoiceImage.src = currentGame.computerChoiceImage;
}

function changeGame() {
  hide(gameButtons);
  hide(changeGameButton);
  show(gameChoiceContainer);
  currentGame.gameReset();
}
