const discord= require('discord.js')
module.exports = {
  data: new discord.SlashCommandBuilder() // Discord.js Slash Command Builder
  .setName('Ping') // Set a Name
  .setDescription('Get Ping'), // Set a description
  run: async (client,interaction) => { // Run Fucntion
    let embed = new discord.EmbedBuilder()
      .setDescription(`Pong - ${client.ws.ping}ms`)
      .setColor("Green")
    interaction.reply({ embeds: [embed] })

}
}