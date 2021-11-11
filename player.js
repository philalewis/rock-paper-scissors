class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.token;
    this.wins = player.wins || 0;
    this.choice = '';
  }
  saveWinsToStorage() {
    var playerData = {
      name: this.name,
      token: this.token,
      wins: this.wins,
    }
    var stringifiedPlayerData = JSON.stringify(playerData);
    localStorage.setItem(playerData.name, stringifiedPlayerData);
  }
  retrieveWinsFromStorage(player) {
    var retrievedPlayerData = localStorage.getItem(player);
    var parsedPlayerData = JSON.parse(retrievedPlayerData);
    return parsedPlayerData.wins;
  }
  takeTurn(gameType, targetId) {
    var choices = ['rock', 'paper', 'scissors', 'lizard', 'alien', 'predator', 'choice4', 'choice5'];
    if (this.name === 'human') {
      return this.choice = targetId;
    } else if (gameType === 'classic') {
      var randomClassicChoice = Math.floor(Math.random() * 3);
      return this.choice = choices[randomClassicChoice];
    } else if (gameType === 'difficult') {
      var randomDifficultChoice = Math.floor(Math.random() * 5 + 3);
      return this.choice = choices[randomDifficultChoice];
    }
  }
}