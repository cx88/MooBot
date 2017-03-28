(() => {
  var io = require("socket.io-client");
  var http = require("http");
  var EE = require("events");
  var GetIP = cb => {
    var str = "";
    http.request({ host: "moomoo.io", path: "/getIP" }, res => res.on("data", c => str += c).on("end", () => cb(JSON.parse(str))).end());
  };
  // 0 = called
  // 1 = connecting
  // 2 = connected
  // 3 = ID given
  // 4 = disconnected
  class Moo extends EE {
    constructor(opt, port, ip) {
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
      var sk = this.socket = io.connect(`http://${this.to}:${this.port}`, { reconnection: false, query: "man=1" });
      sk.on("disconnect", e => {
        sk.close();
        super.emit("destroy", e);
        if (this.opt.autores !== false) { this.connect(); }
      });
      sk.once("connect", () => this.emit("connect"));
    }
  }
  class ObjectManager {
    
  }
  class Notif {
    
  }
  class Alliance extends EE {
    
  }
  class Thing {}
  class Player {}
  class Self extends Player {
    spawn(r = "unknown") {
      if (this.status < 3) { this.moo.on("identify", this.spawn(r)); return; }
    }
  }
  var $ = module.exports = exports = () => new Moo();
  $.Moo = Moo;
  $.Connection = Connection;
  $.GetIP = GetIP;
  $.Thing = Thing;
  $.Player = Player;
  $.Self = Self;
  $.Notif = Notif;
  $.Alliance = Alliance;
  $.ObjectManager = ObjectManager;
})();