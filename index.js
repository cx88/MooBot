(() => {
  var io = require("socket.io-client");
  var http = require("http");
  var GetIP = cb => {
    var str = "";
    http.request({ host: "moomoo.io", path: "/getIP" }, res => res.on("data", c => str += c).on("end", () => cb(JSON.parse(str))).end());
  };
  // 0 = called
  // 1 = connecting
  // 2 = connected
  // 3 = ID given
  // 4 = disconnected
  class Moo {
    constructor(ip, port) {
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
    ready2(n) { this.status < n && (this.status = n); }
    connect() {
      this.ready2(1);
      this.connection = new Connection(this);
    }
  }
  class Connection {
    constructor(me) {
      this.moo = me;
      this.socket = io.connect(`http://${me.to}:${me.port}`, { reconnection: false, query: "man=1" });
      this.init();
    }
    init() {
      var sk = this.socket;
      sk.on("disconnect", () => sk.close());
      sk.once("connect", () => {
        this.moo.ready2(2);
      });
    }
  }
  class Thing {}
  class Player {}
  var $ = module.exports = exports = () => new Moo();
  $.Moo = Moo;
  $.Connection = Connection;
  $.GetIP = GetIP;
  $.Thing = Thing;
  $.Player = Player;
})();