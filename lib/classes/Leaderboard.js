const EventEmitter = require("events");

class Leaderboard extends EventEmitter {
  constructor() {
    super();
    this.top = [];
  }
  update(data) {
    var c = this.top;
    var t = this.top = [];
    for (var i = 0; i < 30; i += 3) {
      t.push({ sid: data[i], name: data[i+1], score: data[i+2] });
    }
    for (var i = 0; i < 10; i++) {
      if (c[i].sid !== t[i].sid) {
        super.emit("shuffle", t);
      }
    }
    super.emit("update", t);
    //console.log(r.join(", "));
  }
}

module.exports = Leaderboard;