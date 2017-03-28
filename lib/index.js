const io = require("socket.io-client");
const $ = module.exports = exports = () => new Moo(io);
const clp = thing => require("./classes/" + thing); // heh
Object.assign($, {
  Moo: clp("Moo"),
  Alliance: clp("Alliance"),
  Notif: clp("Notif"),
  ObjectManager: clp("ObjectManager"),
  Player: clp("Player").Player,
  Self: clp("Player").Self,
  Thing: clp("Thing"),
  Util: require("./util"),
});