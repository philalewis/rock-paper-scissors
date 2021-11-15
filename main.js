var humanScore = document.querySelector('#humanScore');
var computerScore = document.querySelector('#computerScore');
var classicGame = document.querySelector('#classic');
var difficultGame = document.querySelector('#difficult');
var gameChoiceContainer = document.querySelector('.game-choice-container');
var classicButtons = document.querySelector('.classic-buttons');
var difficultButtons = document.querySelector('.difficult-buttons');
var gameButtons = document.querySelector('.game-buttons');
var classicButtons = document.querySelector('.classic-buttons');
var difficultButtons = document.querySelector('.difficult-buttons');
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

classicGame.addEventListener('click', makeNewClassicGame);
difficultGame.addEventListener('click', makeNewDifficultGame);
for (var i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', playGame);
}
changeGameButton.addEventListener('click', changeGame);

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
  winningQuote.innerText = currentGame.winningQuote;
}

function playGame(event) {
  currentGame.humanChoice = currentGame.human.takeTurn(currentGame.gameType, event.target.parentNode.id)
  currentGame.computerChoice = currentGame.computer.takeTurn(currentGame.gameType, event.target.parentNode.id)
  console.log(currentGame.humanChoice, currentGame.computerChoice)
  currentGame.checkForTie();
  currentGame.checkForWin();
  currentGame.human.saveWinsToStorage();
  currentGame.computer.saveWinsToStorage();
  updateCurrentInfo();
  diplayWinnerInfo();
}

function displayChoices() {
  humanChoiceImage.src = `${currentGame.humanChoiceImage}`;
  computerChoiceImage.src = `${currentGame.computerChoiceImage}`;
}

function diplayWinnerInfo() {
  hide(gameButtons);
  displayWinner.innerText = `${currentGame.winnerDeclaration}`;
  displayChoices();
  show(humanChoiceImage);
  show(computerChoiceImage);
  show(gameResults);
  changeGameButton.disabled = true;
  setTimeout(function() {
    hide(gameResults);
    hide(humanChoiceImage);
    hide(computerChoiceImage);
    show(gameButtons);
    show(changeGameButton);
    changeGameButton.disabled = false;
    currentGame.gameReset();
  },2000)
}

function changeGame() {
  hide(gameButtons);
  hide(changeGameButton);
  show(gameChoiceContainer);
  currentGame.gameReset();
}
