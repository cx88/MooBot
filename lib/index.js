const clp = thing => require("./classes/" + thing); // heh
const $ = module.exports = exports = () => new $.Moo();
Object.assign($, {
  Moo: clp("Moo"),
  Alliance: clp("Alliance"),
  Notif: clp("Notif"),
  Player: clp("Player").Player,
  PlayerManager: clp("Player").PlayerManager,
  Self: clp("Player").Self,
  Thing: clp("Thing").Thing,
  ThingManager: clp("Thing").ThingManager,
  Util: require("./util")
});