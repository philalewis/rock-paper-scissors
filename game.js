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
    console.log('Human choice: ', this.humanChoice, 'Computer choice: ', this.computerChoice)
    if (this.gameType === 'classic') {
      if (this.humanChoice === 'socrates' && 
        this.computerChoice === 'aristotle') {
          this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'plato' &&
        this.computerChoice === 'socrates') {
          this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'aristotle' &&
        this.computerChoice === 'plato') {
          this.winner = 'human'
        return this.human.wins++;
      } else {
        this.winner = 'computer'
        return this.computer.wins++;
      }
    } else if (this.gameType === 'difficult') {
      if (this.humanChoice === 'dostoevsky' &&
      (this.computerChoice === 'sartre' || 
      this.computerChoice === 'kierkegaard')) {
        this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'sartre' &&
      (this.computerChoice === 'kierkegaard' || 
      this.computerChoice === 'nietzsche')) {
        this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'kierkegaard' &&
      (this.computerChoice === 'nietzsche' || 
      this.computerChoice === 'camus')) {
        this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'nietzsche' &&
      (this.computerChoice === 'camus' ||
      this.computerChoice === 'dostoevsky')) {
        this.winner = 'human'
        return this.human.wins++;
      } else if (this.humanChoice === 'camus' && 
      (this.computerChoice === 'dostoevsky' ||
      this.computerChoice === 'sartre')) {
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