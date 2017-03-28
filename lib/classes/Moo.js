const EventEmitter = require("events");
const { GetIP } = require("../util");
// 0 = called
// 1 = connecting
// 2 = connected
// 3 = ID given
// 4 = disconnected
class Moo extends EventEmitter {
  constructor(io, opt, port, ip) {
    super();
    this.io = io;
    if (typeof opt != "object") {
      ip = opt;
      this.opt = {};
    } else {
      this.opt = opt;
      ip = opt.ip || (typeof port == "string" ? port : ip);
      port = opt.ip || port;
    }
    this.status = 0;
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
    const sk = this.socket = this.io.connect(`http://${this.to}:${this.port}`, { reconnection: false, query: "man=1" });
    sk.on("disconnect", e => {
      sk.close();
      super.emit("destroy", e);
      if (this.opt.autores !== false) { this.connect(); }
    });
    sk.once("connect", () => this.emit("connect"));
  }
}

module.exports = Moo;