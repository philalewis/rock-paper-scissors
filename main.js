var humanScore = document.querySelector('#humanScore');
var computerScore = document.querySelector('#computerScore');
var gameChoiceButton = document.querySelectorAll('.game-choice-button');
var clearDataButton = document.querySelector('.clear-data');
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
var prompt = document.querySelector('.prompt');
var humanIcon = document.querySelector('.human-icon');
var computerIcon = document.querySelector('.computer-icon');
var parsedHumanData;
var parsedComputerData;
var currentGame;

window.onload = function() {
  var retrievedHumanData = localStorage.getItem('human');
  var retrievedComputerData = localStorage.getItem('computer');
  if (retrievedHumanData || retrievedComputerData) {
    show(clearDataButton);
  }
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
for (var i = 0; i < gameChoiceButton.length; i++) {
  gameChoiceButton[i].addEventListener('click', makeNewGame);
}

for (var i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', playGame);
}
changeGameButton.addEventListener('click', changeGame);
clearDataButton.addEventListener('click', clearStorage);

// Helper functions
function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function makeInvisible(element) {
  element.classList.add('invisible');
}

function makeVisible(element) {
  element.classList.remove('invisible');
}

// New game event handler
function makeNewGame(event) {
  currentGame = new Game(parsedHumanData, parsedComputerData, event.target.parentNode.id);
  // console.log(currentGame)
  prompt.innerText = 'Choose your philosopher!';
  displayNewGameView();
}

function displayNewGameView() {
  hide(gameChoiceContainer);
  show(gameButtons);
  if (currentGame.gameType === 'classical') {
    hide(existentialismButtons);
    show(classicalButtons);
  } else {
    hide(classicalButtons);
    show(existentialismButtons);
  }
}

// Play game event handler
function playGame(event) {
  takeTurn('human', event.target.parentNode.id);
  takeTurn('computer', event.target.parentNode.id);
  currentGame.checkForTie();
  currentGame.determineWinner();
  currentGame.human.saveWinsToStorage();
  currentGame.computer.saveWinsToStorage();
  updateCurrentInfo();
  displayWinnerInfo();
}

function takeTurn(player, eventId) {
  currentGame[`${player}Choice`] = currentGame[player].takeTurn(currentGame.gameType, eventId);
}

function updateCurrentInfo() {
  updateScores();
  winningQuote.innerText = currentGame.winningQuote;
  displayWinner.innerText = `${currentGame.winnerDeclaration}`;
}

function updateScores() {
  var humanWins = currentGame.human.retrieveWinsFromStorage();
  var computerWins = currentGame.computer.retrieveWinsFromStorage();
  humanScore.innerText = `Score: ${humanWins}`;
  computerScore.innerText = `Score: ${computerWins}`;
}

function displayWinnerInfo() {
  displayResultsView();
  setTimeout(function() {
    updateGameViewInfo();
    displayGameView();
  }, 1000);
}

function displayResultsView() {
  hide(prompt);
  hide(gameButtons);
  choosePlayerChoiceImages();
  show(humanChoiceImage);
  show(computerChoiceImage);
  styleWinnerImage();
  showWinnerIcon();
  show(gameResults);
  changeGameButton.disabled = true;
  clearDataButton.disabled = true;
}

function styleWinnerImage() {
  if (currentGame.winner === 'human') {
    humanChoiceImage.classList.add('human-winner-styling');
  } else if (currentGame.winner === 'computer') {
    computerChoiceImage.classList.add('computer-winner-styling');
  }
}

function showWinnerIcon() {
  if (currentGame.winner === 'human') {
    makeVisible(humanIcon);
  } else if (currentGame.winner === 'computer') {
    makeVisible(computerIcon);
  }
}

function updateGameViewInfo() {
  changeGameButton.disabled = false;
  clearDataButton.disabled = false;
  prompt.innerText = 'Choose your philosopher!';
  currentGame.gameReset();
}

function displayGameView() {
  show(prompt);
  hide(gameResults);
  hide(humanChoiceImage);
  hide(computerChoiceImage);
  show(gameButtons);
  show(changeGameButton);
  show(clearDataButton);
  humanChoiceImage.classList.remove('human-winner-styling');
  computerChoiceImage.classList.remove('computer-winner-styling');
  makeInvisible(humanIcon);
  makeInvisible(computerIcon);
}

function choosePlayerChoiceImages() {
  humanChoiceImage.src = currentGame.humanChoiceImage;
  computerChoiceImage.src = currentGame.computerChoiceImage;
}

//Event Handler
function changeGame() {
  hide(gameButtons);
  hide(changeGameButton);
  show(gameChoiceContainer);
  prompt.innerText = 'Choose your era!';
  currentGame.gameReset();
}

//Event handler
function clearStorage() {
  localStorage.clear();
  parsedHumanData = {name: 'human', wins: 0};
  parsedComputerData = {name: 'computer', wins: 0}
  humanScore.innerText = `Score: 0`;
  computerScore.innerText = `Score: 0`;
  changeGame();
  hide(clearDataButton);
}