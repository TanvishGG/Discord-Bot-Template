const { readdirSync } = require("fs");

module.exports = (client) => {
    const buttons = readdirSync(`./buttons/`).filter(file => file.endsWith(".js"));
    for (let file of buttons) {
      let pull = require(`../buttons/${file}`);
      if (pull.name) {
        client.buttons.set(pull.name, pull);
      }
    }
 console.log(`[Button-Handler] Loaded ${client.buttons.size} buttons`)
}
