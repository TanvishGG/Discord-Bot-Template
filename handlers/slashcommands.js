
const {Routes, REST } = require('discord.js');
const fs = require("fs");

module.exports = (client) => {

  if(!client.config.id) throw new Error('[Slash-Handler] Missing User ID');
  let commands = [];
  fs.readdirSync(`./commands/slash/`).forEach((dir) => {
    const SlashCommands = fs.readdirSync(`./commands/slash/${dir}/`).filter((file) => file.endsWith('.js'));

    for (let file of SlashCommands) {
      let pull = require(`../commands/slash/${dir}/${file}`);

      if (pull.data) {
        client.slash_commands.set(pull.data.name, pull);
        commands.push(pull.data);
      } else {
        console.log(`[HANDLER - SLASH] Couldn't load the file ${file}, missing module name value, description, or type isn't 1.`.red)
        continue;
      };
    }
  });

  const rest = new REST({ version: '10' }).setToken(client.config.token);

  (async () => {

    try {
      await rest.put(
        Routes.applicationCommands(client.config.id),
        { body: commands }
      );

      console.log(`[Slash-Handler] Loaded ${commands.length} commands`);
    } catch (err) {
      console.log(err);
    }
  })();

};
