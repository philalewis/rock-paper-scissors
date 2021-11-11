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
      if (this.humanChoice === 'rock') {
        if (this.computerChoice === 'paper') {
          return this.winner = 'computer';
        } else if (this.computerChoice === 'scissors') {
          return this.winner = 'human';
        }
      } else if (this.humanChoice === 'paper') {
        if (this.computerChoice === 'rock') {
          return this.winner = 'human';
        } else if (this.computerChoice === 'scissors') {
          return this.winner = 'computer';
        }
      } else if (this.humanChoice === 'scissors') {
        if (this.computerChoice === 'paper') {
          return this.winner = 'human';
        } else if (this.computerChoice === 'rock') {
          return this.winner = 'computer';
        }
      }
    // } else if (this.gameType === 'difficult') {
    //   if (this.humanChoice === 'lizard')
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