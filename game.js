class Game {
  constructor(humanPlayer, computerPlayer, gameType) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(computerPlayer);
    this.humanChoice = '';
    this.computerChoice = '';
    this.gameType = gameType;
    this.winner;
  }
  checkForWin(humanChoice, computerChoice) {
    if (this.gameType === 'classic') {
      if (humanChoice === 'rock' && 
        computerChoice === 'scissors') {
          return this.winner = 'human'
      } else if (humanChoice === 'paper' &&
        computerChoice === 'rock') {
        return this.winner = 'human'
      } else if (humanChoice === 'scissors' &&
        computerChoice === 'paper') {
          return this.winner = 'human'
      } else {
        return this.winner = 'computer'
      } 
    } else if (this.gameType === 'difficult') {
      if (humanChoice === 'lizard' &&
      (computerChoice === 'alien' || 
      computerChoice === 'predator')) {
        return this.winner = 'human';
      } else if (humanChoice === 'alien' &&
      (computerChoice === 'predator' || 
      computerChoice === 'choice4')) {
        return this.winner = 'human';
      } else if (humanChoice === 'predator' &&
      (computerChoice === 'choice4' || 
      computerChoice === 'choice5')) {
        return this.winner = 'human';
      } else if (humanChoice === 'choice4' &&
      (computerChoice === 'choice5' ||
      computerChoice === 'lizard')) {
        return this.winner = 'human'
      } else if (humanChoice === 'choice5' && 
      (computerChoice === 'lizard' ||
      computerChoice === 'alien')) {
        return this.winner = 'human';
      } else {
        return this.winner = 'computer'
      }
    }
  }
  checkForTie() {
    if (this.humanChoice === this.computerChoice) {
      return true;
    }
    return false;
  }
  gameReset() {
    this.humanChoice = '';
    this.computerChoice = '';
    this.winner = '';

    // Timout function here. Data stored and displayed before this. Should return to game screen
    // setTimeout(function() {

    // }, 2000)
  }
}