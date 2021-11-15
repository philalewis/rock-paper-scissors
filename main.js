var humanScore = document.querySelector('#humanScore');
var computerScore = document.querySelector('#computerScore');
var gameChoiceButton = document.querySelectorAll('.game-choice-button');
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
var currentGame;
var parsedHumanData;
var parsedComputerData;

// When page loads, grab the wins from local storage
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
for (var i = 0; i < gameChoiceButton.length; i++) {
  gameChoiceButton[i].addEventListener('click', makeNewGame);
}
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
function makeNewGame(event) {
  currentGame = new Game(parsedHumanData, parsedComputerData, event.target.parentNode.id);
  console.log(event.target.parentNode.id)
  displayNewGameView();
}

function displayNewGameView() {
  prompt.innerText = 'Choose your philosopher!';
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

function updateCurrentInfo() {
  var humanWins = currentGame.human.retrieveWinsFromStorage('human');
  var computerWins = currentGame.computer.retrieveWinsFromStorage('computer');
  humanScore.innerText = `Score: ${humanWins}`;
  computerScore.innerText = `Score: ${computerWins}`;
  winningQuote.innerText = currentGame.winningQuote;
  displayWinner.innerText = `${currentGame.winnerDeclaration}`;
  // prompt.innerText = '';
  if (currentGame.winner === 'human') {
    humanChoiceImage.classList.add('human-winner-styling');
  } else if (currentGame.winner === 'computer') {
    computerChoiceImage.classList.add('computer-winner-styling');
  }
}

function diplayWinnerInfo() {
  displayResultsView();
  setTimeout(function() {
    displayGameView();
  }, 4000);
}

function displayResultsView() {
  hide(prompt);
  hide(gameButtons);
  changeDisplaySource();
  show(humanChoiceImage);
  show(computerChoiceImage);
  show(gameResults);
  changeGameButton.disabled = true;
}

function displayGameView() {
  show(prompt);
  hide(gameResults);
  hide(humanChoiceImage);
  hide(computerChoiceImage);
  show(gameButtons);
  show(changeGameButton);
  changeGameButton.disabled = false;
  prompt.innerText = 'Choose your philosopher!';
  humanChoiceImage.classList.remove('human-winner-styling');
  computerChoiceImage.classList.remove('computer-winner-styling');
  currentGame.gameReset();
}

function changeDisplaySource() {
  humanChoiceImage.src = currentGame.humanChoiceImage;
  computerChoiceImage.src = currentGame.computerChoiceImage;
}

function changeGame() {
  hide(gameButtons);
  hide(changeGameButton);
  show(gameChoiceContainer);
  prompt.innerText = 'Choose your era!';
  currentGame.gameReset();
}
