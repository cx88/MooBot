const EventEmitter = require("events");
var Thing = require("../Alliance");

class AllianceManager extends EventEmitter {
  constructor() {
    super();
  }
}

module.exports = AllianceManager;