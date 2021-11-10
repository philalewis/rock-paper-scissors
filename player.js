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
  takeTurn(choice) {
    
  }
}