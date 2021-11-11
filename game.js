class Game {
  constructor(humanPlayer, computerPlayer, gameType) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(computerPlayer);
    this.humanChoice;
    this.computerChoice;
    this.gameType = gameType;
    this.winner;
  }
  checkForWin() {
    if (this.gameType === 'classic') {
      if (this.humanChoice === 'rock' && 
        this.computerChoice === 'scissors') {
        return this.human.wins++;
      } else if (this.humanChoice === 'paper' &&
        this.computerChoice === 'rock') {
        return this.human.wins++;
      } else if (this.humanChoice === 'scissors' &&
        this.computerChoice === 'paper') {
        return this.human.wins++;
      } else {
        return this.computer.wins++;
      } 
    } else if (this.gameType === 'difficult') {
      if (this.humanChoice === 'lizard' &&
      (this.computerChoice === 'alien' || 
      this.computerChoice === 'predator')) {
        return this.human.wins++;
      } else if (this.humanChoice === 'alien' &&
      (this.computerChoice === 'predator' || 
      this.computerChoice === 'choice4')) {
        return this.human.wins++;
      } else if (this.humanChoice === 'predator' &&
      (this.computerChoice === 'choice4' || 
      this.computerChoice === 'choice5')) {
        return this.human.wins++;
      } else if (this.humanChoice === 'choice4' &&
      (this.computerChoice === 'choice5' ||
      this.computerChoice === 'lizard')) {
        return this.human.wins++;
      } else if (this.humanChoice === 'choice5' && 
      (this.computerChoice === 'lizard' ||
      this.computerChoice === 'alien')) {
        return this.human.wins++;
      } else {
        return this.computer.wins++;
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
    // this.humanChoice = '';
    // this.computerChoice = '';
    // this.winner = '';

    // Timout function here. Data stored and displayed before this. Should return to game screen
    // setTimeout(function() {

    // }, 2000)
  }
}