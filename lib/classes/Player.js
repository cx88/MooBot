class Player {}

class Self extends Player {
  spawn(r = "unknown") {
    if (this.status < 3) { this.moo.on("identify", this.spawn(r)); return; }
  }
}

module.exports = { Player, Self };