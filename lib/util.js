const http = require("http");

class Util {
  static GetIP(cb) {
    let str = "";
    http.request({ host: "moomoo.io", path: "/getIP" }, res => res.on("data", c => str += c).on("end", () => cb(JSON.parse(str))).end());
  }
}

module.exports = { Util };