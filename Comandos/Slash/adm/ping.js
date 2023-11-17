const Discord = require("discord.js")

module.exports = {
    name: "ping",
    description: "ping do seu bot",
    type: Discord.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {

        interaction.reply({content: `Meu ping é de: ${client.ws.ping}`})

    }
}