const { readdirSync } = require("fs")

module.exports = (client) => {
    console.log(`Carregando eventos...`);
    const load = dirs => {
        const events = readdirSync(`./eventos/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of events) {
            const evt = require(`../eventos/${dirs}/${file}`);
            let eName = file.split('.')[0];
            client.on(eName, evt.bind(null, client));
        };
    };

    ["client", "guild"].forEach(x => load(x))

    console.log(`Eventos carregados.\n`)
};