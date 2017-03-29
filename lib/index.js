const $ = module.exports = exports = () => new $.Moo();
for (var i of [
  "./classes/Alliance",
  "./classes/Moo",
  "./classes/Notif",
  "./classes/Player",
  "./classes/Thing",
  "./util"
]) {
  var x = require(i);
  for (var j in x) { $[j] = x[j]; }
}