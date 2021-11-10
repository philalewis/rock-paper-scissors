class Game {
  constructor(humanPlayer, computerPlayer, gameType) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(computerPlayer);
    this.humanChoice = '';
    this.computerChoice = '';
    this.gameType = gameType;
    this.winner;
  }
  checkForWin(humanChoice, ComputerChoice) {
    // Check who won and return the winner
    if (this.gameType === 'classic') {
      
    }
  }
  checkForTie() {
    if (this.humanChoice === this.computerChoice) {
      return true;
    }
    return false;
  }
  gameReset() {
    // Timout function here. Data stored and displayed before this. Should return to game screen
    setTimeout(function() {

    }, 2000)
  }
}