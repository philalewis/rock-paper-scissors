class Game {
  constructor(humanPlayer, computerPlayer) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(computerPlayer);
    this.humanChoice = '';
    this.computerChoice = '';
    this.gameType = '';
    this.winner;
  }
  checkForWin() {

  }
  checkForTie() {

  }
  gameReset() {
    this.human.saveWinsToStorage();
    this.computer.saveWinsToStorgae();
    this.human = new Player()
  }
}