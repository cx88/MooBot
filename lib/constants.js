exports.Events = {
  id: "identify",
  d: "disconnect",
  1: "spawn",
  2: "playerIn",
  3: "playerUpdate",
  4: "playerOut",
  5: "lbUpdate", //leaderboard
  6: "thingCreate",
  7: "swing",
  8: "shake",
  9: "score",
  10: "healthUpdate",
  11: "death",
  12: "thingDestroy",
  13: "kill",
  14: "upgrade",
  15: "age",
  16: "weaponAvailable",
  17: "itemAvailable",
  ac: "allianceCreate",
  ad: "allianceDelete",
  an: "notif",
  st: "allianceJoin",
  sa: "allianceUpdate",
  dtv: "timeUpdate",
};
Object.entries(exports.Events).map(([k, v]) => {
  exports.Events[v] = k;
});