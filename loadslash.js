// const Discord = require("discord.js")
// require("dotenv").config()

// const { Client, GatewayIntentBits } = require('discord.js');

// const client = new Discord.Client({
//     intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.GuildMessages,
//         GatewayIntentBits.GuildMembers,
//     ]
// })

// let bot = {
//     client,
//     prefix: "u$",
//     owners: ["461864600716050442"]
// }

// const guildId = "528378099734151178"

// client.slashcommands = new Discord.Collection()


// client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
// client.loadSlashCommands(bot, false)

// client.on("ready", async () => {
//     const guild = client.guilds.cache.get(guildId)
//     if (!guild)
//         return console.error("Target guild not found")

//     await guild.commands.set([...client.slashcommands.values()])
//     console.log(`Successfully loaded in ${client.slashcommands.size}`)
//     process.exit(0)
// })


// client.login(process.env.TOKEN)
