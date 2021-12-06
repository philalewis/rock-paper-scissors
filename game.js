class Game {
  constructor(humanPlayer, computerPlayer, gameType) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(computerPlayer);
    this.humanChoice = '';
    this.computerChoice = '';
    this.gameType = gameType;
    this.winner = '';
    this.winnerDeclaration = '';
    this.humanChoiceImage = '';
    this.computerChoiceImage = '';
    
    this.winningQuote = '';
    this.isATie = null;
    this.quoteOptions = quoteOptions;
  }

  determineWinner() {
    if (this.isATie) {
      return this.updateGameData();
    } else if (this.gameType === 'classical') {
      this.checkClassicalWinner();
    } else if (this.gameType === 'existentialism') {
      this.checkExistentialismWinner();
    }
    this.updateGameData();
  }

  updateGameData() {
    if (this.isATie) {
      this.winnerDeclaration = `It's a tie!`
      this.winningQuote = this.quoteOptions[`${this.humanChoice}Tie`];
    } else if (this.winner === 'human') {
      this.human.wins++;
      this.winnerDeclaration = `You win!`;
      this.winningQuote = this.quoteOptions[`${this.humanChoice}Good`];
    } else if (this.winner === 'computer') {
      this.computer.wins++;
      this.winnerDeclaration = `You lose!`;
      this.winningQuote = this.quoteOptions[`${this.computerChoice}Bad`];
    }
    this.updateImageSources();
  }

  updateImageSources() {
    this.humanChoiceImage = `./assets/${this.humanChoice}.jpeg`;
    this.computerChoiceImage = `./assets/${this.computerChoice}.jpeg`;
  }

  checkClassicalWinner() {
    if (this.humanChoice === 'socrates' && 
      this.computerChoice === 'aristotle') {
        this.winner = 'human';
    } else if (this.humanChoice === 'plato' &&
      this.computerChoice === 'socrates') {
        this.winner = 'human';
    } else if (this.humanChoice === 'aristotle' &&
      this.computerChoice === 'plato') {
        this.winner = 'human';
    } else {
        this.winner = 'computer';
    }
  }

  checkExistentialismWinner() {
    if (this.humanChoice === 'dostoevsky' &&
      (this.computerChoice === ('sartre' || 'kierkegaard'))) {
        this.winner = 'human';
    } else if (this.humanChoice === 'sartre' &&
      (this.computerChoice === ('kierkegaard' || 'nietzsche'))) {
        this.winner = 'human';
    } else if (this.humanChoice === 'kierkegaard' &&
      (this.computerChoice === ('nietzsche' || 'camus'))) {
        this.winner = 'human';
    } else if (this.humanChoice === 'nietzsche' &&
      (this.computerChoice === ('camus' || 'dostoevsky'))) {
        this.winner = 'human';
    } else if (this.humanChoice === 'camus' && 
      (this.computerChoice === ('dostoevsky' || 'sartre'))) {
        this.winner = 'human';
    } else {
      this.winner = 'computer';
    }
  }

  checkForTie() {
    if (this.humanChoice === this.computerChoice) {
      this.winner = 'nobody';
      this.isATie = true;
    } else {
      this.isATie = false;
    }
  }

  gameReset() {
    this.humanChoice = '';
    this.computerChoice = '';
    this.winner = '';
    this.humanChoiceImage = '';
    this.computerChoiceImage = '';
    this.winningQuote = '';
    this.isATie = null;
  }
}
