
module.exports =  {
    name: "interactionCreate",
    async execute(interaction) {
    const client = interaction.client;
        if (interaction.isChatInputCommand()) {
            const command = client.slash_commands.get(interaction.commandName);
        
            if (!command) return;
        
            try {
              command.run(client, interaction);
            } catch (e) {
              console.error(e)
            };
    }
    if(interaction.isButton()) {
     const button = client.buttons.get(interaction.customId)
     if(button) {
      try {
        button.execute(client,interaction);
      }
      catch (e) {
        console.error(e)
      }
     }
    }
}
}