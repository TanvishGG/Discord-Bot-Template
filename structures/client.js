
const { Client, Partials,ActivityType, Collection, GatewayIntentBits } = require('discord.js');
class Bot extends Client {

	constructor () {
		super({
		intents:[GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent],
	   partials: [
		Partials.Channel,
        Partials.Message,
	    Partials.User,
	    Partials.GuildMember,
	    Partials.Reaction
	    ],
	   presence: {
	    activities: [{
		name: `Status Text`, // Status Text
		type: ActivityType.Watching //Status Type
		}],
	    status: "idle" // Status
		 }
	
			
		});
		this.config = require("./config.js"); 
		this.commands = new Collection();
        this.aliases = new Collection();
		this.slash_commands = new Collection();
		this.events = new Collection();
		this.buttons = new Collection();

	}

}
module.exports = Bot;
