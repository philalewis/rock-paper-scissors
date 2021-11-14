class Game {
  constructor(humanPlayer, computerPlayer, gameType) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(computerPlayer);
    this.humanChoice;
    this.computerChoice;
    this.gameType = gameType;
    this.winner;
    this.humanChoiceImage;
    this.computerChoiceImage;
    this.winningQuote;
    this.isATie;
  }
  checkForWin() {
    this.humanChoiceImage = `./assets/${this.humanChoice}.jpeg`;
    this.computerChoiceImage = `./assets/${this.computerChoice}.jpeg`;
    this.winningQuote = ``
    if (this.gameType === 'classic') {
      if (this.isATie) {
        return;
      } else if (this.humanChoice === 'socrates' && 
        this.computerChoice === 'aristotle') {
          this.winner = 'human';
          this.winningQuote = "The only true wisdom is in knowing that you know nothing.";
          return this.human.wins++;
      } else if (this.humanChoice === 'plato' &&
        this.computerChoice === 'socrates') {
          this.winner = 'human'
          this.winningQuote = "Be kind, for everyone you meet is fighting a harder battle.";
          return this.human.wins++;
      } else if (this.humanChoice === 'aristotle' &&
        this.computerChoice === 'plato') {
          this.winner = 'human';
          this.winningQuote = "Quality is not an act, it is a habbit.";
          return this.human.wins++;
      } else {
          this.winner = 'computer';
          return this.computer.wins++;
      }
    } else if (this.gameType === 'difficult') {
        if (this.isATie) {
          return;
        } else if (this.humanChoice === 'dostoevsky' &&
        (this.computerChoice === 'sartre' || 
        this.computerChoice === 'kierkegaard')) {
          this.winner = 'human';
          this.winningQuote = "To go wrong in one's own way is better than to go right in someone else's.";
          return this.human.wins++;
        } else if (this.humanChoice === 'sartre' &&
        (this.computerChoice === 'kierkegaard' || 
        this.computerChoice === 'nietzsche')) {
          this.winner = 'human';
          this.winningQuote = "Freedom is what we do with what is done to us.";
          return this.human.wins++;
        } else if (this.humanChoice === 'kierkegaard' &&
        (this.computerChoice === 'nietzsche' || 
        this.computerChoice === 'camus')) {
          this.winner = 'human';
          this.winningQuote = "Life can only be understood backwards; but it must be lived forwards.";
          return this.human.wins++;
        } else if (this.humanChoice === 'nietzsche' &&
        (this.computerChoice === 'camus' ||
        this.computerChoice === 'dostoevsky')) {
          this.winner = 'human';
          this.winningQuote = "And those who were seen dancing were thought to be insane by those who could not hear the music.";
          return this.human.wins++;
        } else if (this.humanChoice === 'camus' && 
        (this.computerChoice === 'dostoevsky' ||
        this.computerChoice === 'sartre')) {
          this.winner = 'human';
          this.winningQuote = "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.";
          return this.human.wins++;
        } else {
          this.winner = 'computer';
          return this.computer.wins++;
        }
    }
  }
  checkForTie() {
    if (this.humanChoice === this.computerChoice) {
      this.winner = 'nobody';
      return this.isATie = true;
    }
    return this.isATie = false;
  }
  gameReset() {
    this.humanChoice = '';
    this.computerChoice = '';
    this.winner = '';
    this.humanChoiceImage = '';
    this.computerChoiceImage = '';
    this.winningQuote = '';
  }
}