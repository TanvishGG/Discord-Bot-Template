const { readdirSync } = require("fs");

module.exports = (client) => {
  readdirSync("./commands/prefix/").forEach(dir => {
    const commands = readdirSync(`./commands/prefix/${dir}/`).filter(file => file.endsWith(".js"));
    for (let file of commands) {
      let pull = require(`../commands/prefix/${dir}/${file}`);
      if (pull.config.name) {
        client.commands.set(pull.config.name, pull);
      }
      if (pull.config.aliases && Array.isArray(pull.config.aliases)) pull.config.aliases.forEach(alias => client.aliases.set(alias, pull.config.name));
    }
  });
 console.log(`[Command-Handler] Loaded ${client.commands.size} commands`)
}
