const EventEmitter = require("events");

class Leaderboard extends EventEmitter {
  constructor() {
    this.top = Array(10);
  }
  update(data) {
    
  }
}

module.exports = Leaderboard;