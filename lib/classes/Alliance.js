const EventEmitter = require("events");

class Alliance extends EventEmitter {
  constructor(name) {
    this.name = name;
  }
  join() {
    
  }
}

class AllianceManager extends EventEmitter {
  constructor() {
  }
}

module.exports = { Alliance, AllianceManager };