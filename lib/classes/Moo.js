const EventEmitter = require("events");
const io = require("socket.io-client");
const { GetIP } = require("../util");
const Constants = require("../constants");
const Leaderboard = require("./Leaderboard");
// 0 = called
// 1 = connecting
// 2 = connected
// 3 = ID given
// 4 = disconnected
class Moo extends EventEmitter {
  constructor(opt, port, ip) {
    super();
    if (typeof opt != "object") {
      ip = opt;
      this.opt = {};
    } else {
      this.opt = opt;
      ip = opt.ip || (typeof port == "string" ? port : ip);
      port = opt.ip || port;
    }
    this.status = 0;
    this.lb = new Leaderboard();
    if (!ip || !(port > 4999)) {
      GetIP(r => {
        this.ip = ip || r.ip;
        this.port = port > 4999 ? port : r.port;
        this.connect();
      });
    } else {
      this.connect();
    }
  }
  connect() {
    this.emit("fetched");
    this.status = 1;
    const sk = this.socket = io.connect(`http://${this.to}:${this.port}`, { reconnection: false, query: "man=1" });
    Object.entries(Constants.Events).map(([k, v]) => {
      const response = function(...values) {
        //WIP
      };
    });
    sk.on("disconnect", e => {
      sk.close();
      this.status = 4;
      super.emit("destroy", e);
      if (this.opt.autores !== false) { this.connect(); }
    });
    sk.on(Constants.Events.LB_UPDATE, d => this.lb.update(d));
    sk.once("connect", () => {
      this.emit("connect");
      this.status = 2;
    });
  }
}

module.exports = Moo;