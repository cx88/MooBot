const $ = module.exports = exports = () => new $.Moo();
var classes = [
  "Alliance",
  "Moo",
  "Notif",
  "Player",
  "Self",
  "Thing"
];
var manager = [
  "Alliance",
  "Player",
  "Thing"
];
var root = [
  "util"
];
for (let i of classes) {
  $[i] = require("./classes/" + i);
}
for (let i of manager) {
  $[i + "Manager"] = require("./classes/manager/" + i);
}
for (let i of root) {
  $[i] = require("./" + i);
}
