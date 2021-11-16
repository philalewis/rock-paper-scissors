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
    this.quoteOptions = {
      socratesGood: `Socrates says, "The only true wisdom is in knowing that you know nothing."`,
      socratesBad: `Socrates says, "The unexamined life is not worth living"`,
      socratesTie: `Socrates says, "There is only one good, knowledge, and one evil, ignorance."`,
      platoGood: `Plato says, "Be kind, for everyone you meet is fighting a harder battle."`,
      platoBad: `Plato says, "Only the dead have seen the end of war."`,
      platoTie: `Plato says, "The price good men pay for indifference to public affairs is to be ruled by evil men."`,
      aristotleGood: `Aristotle says, "Quality is not an act, it is a habbit."`,
      aristotleBad: `Aristotle says, "There is no great genius without some touch of madness."`,
      aristotleTie: `Aristotle says, "It is the mark of an educated mind to be able to entertain a thought without accepting it."`,
      dostoevskyGood: `Fyodor Dostoevsky says, "To go wrong in one's own way is better than to go right in someone else's."`,
      dostoevskyBad: `Fyodor Dostoevsky says, "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth."`,
      dostoevskyTie: `Fyodor Dostoevsky says, "The mystery of human existence lies not in just staying alive, but in finding something to live for."`,
      sartreGood: `Jean-Paul Sartre says, "Freedom is what we do with what is done to us."`,
      sartreBad: `Jean-Paul Sartre says, "Every existing thing is born without reason, prolongs itself out of weakness, and dies by chance."`,
      sartreTie: ` Jean-Paul Sartre says, "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does."`,
      kierkegaardGood: `Søren Kierkegaard says, "Life can only be understood backwards; but it must be lived forwards."`,
      kierkegaardBad: `Søren Kierkegaard says, "People demand freedom of speech as a compensation for the freedom of thought which they seldom use."`,
      kierkegaardTie: `Søren Kierkegaard says, "There are two ways to be fooled. One is to believe what isn't true; the other is to refuse to believe what is true."`,
      nietzscheGood: `Friedrich Nietzsche says, "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist."`,
      nietzscheBad: `Friedrich Nietzsche says, "There is always some madness in love. But there is also always some reason in madness."`,
      nietzscheTie: `Friedrich Nietzsche says, "Sometimes people don't want to hear the truth because they don't want their illusions destroyed."`,
      camusGood: `Albert Camus says, "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."`,
      camusBad: `Albert Camus says, "The evil that is in the world almost always comes of ignorance, and good intentions may do as much harm as malevolence if they lack understanding."`,
      camusTie: `Albert Camus says, "Those who lack the courage will always find a philosophy to justify it."`
    }
  }

  determineWinner() {
    if (this.isATie) {
      this.winnerDeclaration = `It's a tie!`;
      this.winningQuote = this.quoteOptions[`${this.humanChoice}Tie`];
    }
    if (this.gameType === 'classical') {
      this.checkClassicalWinner();
    }
    if (this.gameType === 'existentialism') {
      this.checkExistentialismWinner();
    }
    this.updateGameData();
  }

  updateGameData() {
    if (this.winner === 'human') {
      this.human.wins++;
      this.winnerDeclaration = `You win!`;
      this.winningQuote = this.quoteOptions[`${this.humanChoice}Good`];
    }
    if (this.winner === 'computer') {
      this.computer.wins++;
      this.winnerDeclaration = `You loose!`;
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
      (this.computerChoice === 'sartre' || 
      this.computerChoice === 'kierkegaard')) {
        this.winner = 'human';
    } else if (this.humanChoice === 'sartre' &&
      (this.computerChoice === 'kierkegaard' || 
      this.computerChoice === 'nietzsche')) {
        this.winner = 'human';
    } else if (this.humanChoice === 'kierkegaard' &&
      (this.computerChoice === 'nietzsche' || 
      this.computerChoice === 'camus')) {
        this.winner = 'human';
    } else if (this.humanChoice === 'nietzsche' &&
      (this.computerChoice === 'camus' ||
      this.computerChoice === 'dostoevsky')) {
        this.winner = 'human';
    } else if (this.humanChoice === 'camus' && 
      (this.computerChoice === 'dostoevsky' ||
      this.computerChoice === 'sartre')) {
        this.winner = 'human';
    } else {
      this.winner = 'computer';
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
    this.isATie = null;
  }
}