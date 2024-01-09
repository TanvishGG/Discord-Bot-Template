const path = require('path')
const fs = require('fs')
module.exports = (client) => {
const eventsPath = path.join(__dirname, '../','events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	client.events.set(event.name,event);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
console.log(`[Event-Handler] Loaded ${client.events.size} events`)
}