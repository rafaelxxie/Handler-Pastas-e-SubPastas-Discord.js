module.exports = {
    name: "ping",
    run: async (client, message) => {
        message.reply({content: `Meu ping é de: \`${client.ws.ping}ms\``})
    }
}