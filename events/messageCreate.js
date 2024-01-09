
module.exports = {
    name: 'messageCreate', 
    async execute(message) {
    const client = message.client;
    const prefix = client.config.prefix;
    if (message.author.bot) return;
    if (!message.guild) return;
    if (message.content && message.content.startsWith(prefix)) {
    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
    command.run(client, message, args);
          }
        }
       
    }
}
