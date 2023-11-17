const Discord = require("discord.js")
const config = require("./config.json")
const client = new Discord.Client({
  intents:[ 32767, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent, ]
  });



module.exports = client

client.on("interactionCreate", async (interaction) => {
 //HANDLER000000000000000
 if(interaction.type === Discord.InteractionType.ApplicationCommand){

  const cmd = client.slashCommands.get(interaction.commandName);

  if (!cmd) return interaction.reply(`Error`);

  interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

  cmd.run(client, interaction)
 }

//--------------------------------------------//
})


client.slashCommands = new Discord.Collection()

require('./handlers/indexSlash')(client)

client.aliases = new Discord.Collection();
client.commands = new Discord.Collection();
["aliases"].forEach(x => client[x] = new Discord.Collection());
["comando", "evento"].forEach(x => require(`./handlers/${x}`)(client));



client.login(config.token)

//CrÃ©ditos - CodeLab  
