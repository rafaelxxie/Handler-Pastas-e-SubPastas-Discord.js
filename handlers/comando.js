const { readdirSync } = require("fs")

const ascii = require("ascii-table")

let table = new ascii("Commands")
table.setHeading("Comando", "Status do carregamento")

module.exports = (client) => {
  console.log(`\nCarregando comandos...`)
 
  readdirSync("./Comandos/Prefix/").forEach((dir) => {

    const commands = readdirSync(`./Comandos/Prefix/${dir}/`).filter((file) =>
      file.endsWith(".js")
    )

    for (let file of commands) {
      let pull = require(`../Comandos/Prefix/${dir}/${file}`)

      if (pull.name) {
        client.commands.set(pull.name, pull)
       
      } 

      if (pull.aliases && Array.isArray(pull.aliases))
        pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name))
    }
  })
  console.log(`Comandos carregados.\n`)
}
