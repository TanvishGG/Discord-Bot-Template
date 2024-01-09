const discord= require('discord.js')
module.exports = {
  config: {
    name: "info", // Command Name
	  usage: "[p]info", // Usage Example
    category: "info", // Category
    description: "Bot Info", // Description
  },
  run: async (client, message, args) => { // Run Fucntion
    let embed = new discord.EmbedBuilder()
      .setDescription(`Pong - ${client.ws.ping}ms`)
.setColor("Green")

    message.reply({ embeds: [embed] })

}
}