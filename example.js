var moo = require("MooBot");
var bot = moo();
bot.on("identify", user => {
  user.spawn("Spin2Team").then(() => {
    user.ally("MG").then(clan => {
      if (clan.owner.id == user.id) {
        console.log("Clan MG not found! Creating new.");
        clan.on("notif", s => {
          if (s.name.match(/team/gi)) {
            s.accept();
            console.log(s.name + " is a teamer! I allowed them to join!");
          } else {
            s.reject();
            console.log(s.name + " is not a teamer!");
          }
        });
      }
    });
  });
  setInterval(() => {
    bot.angle += 0.1; // Spinning!
  }, 40);
  user.on("killed", () => {
    user.spawn("Spin2Team");
    console.log("I'm killed... Respawning");
  }).on("kill", s => {
    console.log("Yay! I killed " + s);
  });
});