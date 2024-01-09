const Client = require('./structures/client.js');
const client = new Client();
if(!client.config.token) throw new Error("Token Not Provided");
["commands","errors","buttons", "events", "slashcommands"].forEach((file) => {
require(`./handlers/${file}`)(client);
 });
client.login(client.config.token);