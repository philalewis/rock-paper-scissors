class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.token;
    this.wins = player.wins || 0;
  }
  saveWinsToStorgae() {
    var playerData = {
      name: this.name,
      token: this.token,
      wins: this.wins,
    }
    var stringifiedPlayerData = JSON.stringify(playerData);
    localStorage.setItem(playerData.name, stringifiedPlayerData);
  }
  retrieveWinsFromStorage() {
    var retrievedPlayerData = localStorage.getItem(playerData.name);
    var parsedPlayerData = JSON.parse(retrievedPlayerData);
    return parsedPlayerData;
  }
  takeTurn(gameType, targetId) {
    var choices = ['rock', 'paper', 'scissors', 'lizard', 'alien', 'predator', 'choice4', 'choice5'];
    if (this.name = 'human') {
      return targetId;
    } else if (gameType === 'classic') {
      var randomClassicChoice = Math.floor(Math.random() * 3);
      return choices[randomClassicChoice];
    } else if (gameType === 'difficult') {
      var randomDifficultChoice = Math.floor(Math.random() * 5 + 3);
      return choices[randomDifficultChoice];
    }
  }
}