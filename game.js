class Game {
  constructor(humanPlayer, computerPlayer, gameType) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(computerPlayer);
    this.humanChoice;
    this.computerChoice;
    this.gameType = gameType;
    this.winner = '';
    this.winnerDeclaration = '';
    this.humanChoiceImage = '';
    this.computerChoiceImage = '';
    this.winningQuote = '';
    this.isATie = null;
    this.quoteOptions = {
      socratesGood: `"The only true wisdom is in knowing that you know nothing."`,
      socratesBad: `"The unexamined life is not worth living"`,
      platoGood: `"Be kind, for everyone you meet is fighting a harder battle."`,
      platoBad: `"Only the dead have seen the end of war."`,
      aristotleGood: `"Quality is not an act, it is a habbit."`,
      aristotleBad: `"There is no great genius without some touch of madness."`,
      dostoevskyGood: `"To go wrong in one's own way is better than to go right in someone else's."`,
      dostoevskyBad: `"Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth."`,
      sartreGood: `"Freedom is what we do with what is done to us."`,
      sartreBad: `"Every existing thing is born without reason, prolongs itself out of weakness, and dies by chance."`,
      kierkegaardGood: `"Life can only be understood backwards; but it must be lived forwards."`,
      kierkegaardBad: `"People demand freedom of speech as a compensation for the freedom of thought which they seldom use."`,
      nietzscheGood: `"You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist."`,
      nietzscheBad: `"There is always some madness in love. But there is also always some reason in madness."`,
      camusGood: `"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."`,
      camusBad: `"The evil that is in the world almost always comes of ignorance, and good intentions may do as much harm as malevolence if they lack understanding."`
    }
  }
  checkForWin() {
    this.humanChoiceImage = `./assets/${this.humanChoice}.jpeg`;
    this.computerChoiceImage = `./assets/${this.computerChoice}.jpeg`;
    if (this.gameType === 'classic') {
      if (this.isATie) {
        return this.winnerDeclaration = `It's a tie!`;
      } else if (this.humanChoice === 'socrates' && 
        this.computerChoice === 'aristotle') {
          this.winner = 'human';
          this.winnerDeclaration = `You win!`;
          this.winningQuote = `"The only true wisdom is in knowing that you know nothing."`;
          return this.human.wins++;
      } else if (this.humanChoice === 'plato' &&
        this.computerChoice === 'socrates') {
          this.winner = 'human';
          this.winnerDeclaration = `You win!`;
          this.winningQuote = `"Be kind, for everyone you meet is fighting a harder battle."`;
          return this.human.wins++;
      } else if (this.humanChoice === 'aristotle' &&
        this.computerChoice === 'plato') {
          this.winner = 'human';
          this.winnerDeclaration = `You win!`;
          this.winningQuote = `"Quality is not an act, it is a habbit."`;
          return this.human.wins++;
      } else {
        this.winner = 'computer';
        this.winnerDeclaration = 'You loose!';
        return this.computer.wins++;
      }
    } else if (this.gameType === 'difficult') {
      if (this.isATie) {
        return;
      } else if (this.humanChoice === 'dostoevsky' &&
        (this.computerChoice === 'sartre' || 
        this.computerChoice === 'kierkegaard')) {
          this.winner = 'human';
          this.winnerDeclaration = `You win!`;
          this.winningQuote = `"To go wrong in one's own way is better than to go right in someone else's."`;
          return this.human.wins++;
      } else if (this.humanChoice === 'sartre' &&
        (this.computerChoice === 'kierkegaard' || 
        this.computerChoice === 'nietzsche')) {
          this.winner = 'human';
          this.winnerDeclaration = `You win!`;
          this.winningQuote = `"Freedom is what we do with what is done to us."`;
          return this.human.wins++;
      } else if (this.humanChoice === 'kierkegaard' &&
        (this.computerChoice === 'nietzsche' || 
        this.computerChoice === 'camus')) {
          this.winner = 'human';
          this.winnerDeclaration = `You win!`;
          this.winningQuote = `"Life can only be understood backwards; but it must be lived forwards."`;
          return this.human.wins++;
      } else if (this.humanChoice === 'nietzsche' &&
        (this.computerChoice === 'camus' ||
        this.computerChoice === 'dostoevsky')) {
          this.winner = 'human';
          this.winnerDeclaration = `You win!`;
          this.winningQuote = `"You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist."`;
          return this.human.wins++;
      } else if (this.humanChoice === 'camus' && 
        (this.computerChoice === 'dostoevsky' ||
        this.computerChoice === 'sartre')) {
          this.winner = 'human';
          this.winnerDeclaration = `You win!`;
          this.winningQuote = `"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."`;
          return this.human.wins++;
      } else {
        this.winner = 'computer';
        this.winnerDeclaration = 'You loose!';
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