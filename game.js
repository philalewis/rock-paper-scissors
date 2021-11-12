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
          this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'paper' &&
        this.computerChoice === 'rock') {
          this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'scissors' &&
        this.computerChoice === 'paper') {
          this.winner = 'human'
        return this.human.wins++;
      } else {
        this.winner = 'computer'
        return this.computer.wins++;
      } 
    } else if (this.gameType === 'difficult') {
      if (this.humanChoice === 'lizard' &&
      (this.computerChoice === 'alien' || 
      this.computerChoice === 'predator')) {
        this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'alien' &&
      (this.computerChoice === 'predator' || 
      this.computerChoice === 'choice4')) {
        this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'predator' &&
      (this.computerChoice === 'choice4' || 
      this.computerChoice === 'choice5')) {
        this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'choice4' &&
      (this.computerChoice === 'choice5' ||
      this.computerChoice === 'lizard')) {
        this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'choice5' && 
      (this.computerChoice === 'lizard' ||
      this.computerChoice === 'alien')) {
        this.winner = 'human'
        return this.human.wins++;
      } else {
        this.winner = 'computer'
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
    this.humanChoice = '';
    this.computerChoice = '';
    this.winner = '';
  }
}