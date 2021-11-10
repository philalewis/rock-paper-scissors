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
    localStorage.setItem('storedPlayerData', stringifiedPlayerData);
  }
  retrieveWinsFromStorage() {
    var retrievedPlayerData = localStorage.getItem('storedPlayerData');
    var parsedPlayerData = JSON.parse(retrievedPlayerData);
    return parsedPlayerData;
  }
  takeTurn(gameType, targetId) {
    var choices = {
      0: 'rock',
      1: 'paper',
      2: 'scissors',
      3: 'lizard',
      4: 'alien',
      5: 'predator',
      6: 'choice4',
      7: 'choice5'
    }
    if (this.name = 'human') {
      return targetId;
    }
    if (gameType === 'classic') {
      var randomClassicChoice = Math.floor(Math.random() * 3);
      return choices[randomClassicChoice];
    }
    if (gameType === 'difficult') {
      var randomDifficultChoice = Math.floor(Math.random() * 5 + 3);
      return choices[randomDifficultChoice];
    }
  }
}