class Player {
  constructor(player) {
    this.name = player.name;
    this.wins = player.wins || 0;
    this.choice = '';
  }

  saveWinsToStorage() {
    var playerData = {
      name: this.name,
      wins: this.wins
    }
    var stringifiedPlayerData = JSON.stringify(playerData);
    localStorage.setItem(playerData.name, stringifiedPlayerData);
  }

  retrieveWinsFromStorage() {
    var retrievedPlayerData = localStorage.getItem(this.name);
    var parsedPlayerData = JSON.parse(retrievedPlayerData);
    return parsedPlayerData.wins;
  }
  
  takeTurn(gameType, targetId) {
    var choices = ['socrates', 'plato', 'aristotle', 'dostoevsky', 'sartre', 'kierkegaard', 'nietzsche', 'camus'];
    if (this.name === 'human') {
      return this.choice = targetId;
    } else if (gameType === 'classical') {
      var randomClassicalChoice = Math.floor(Math.random() * 3);
      return this.choice = choices[randomClassicalChoice];
    } else if (gameType === 'existentialism') {
      var randomExistentialismChoice = Math.floor(Math.random() * 5 + 3);
      return this.choice = choices[randomExistentialismChoice];
    }
  }
}