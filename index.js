const Discord = require("discord.js")
require("dotenv").config()

// const generateImage = require("./generateImage")

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
    ]
})

let bot = {
    client,
    prefix: "u$",
    owners: ["461864600716050442"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

module.exports = bot

// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

// Welcome message code below
// const welcomeChannelId = "1023065186099286036"

// client.on("guildMemberAdd", async (member) => {
//     const img = await generateImage(member)
//     member.guild.channels.cache.get(welcomeChannelId).send({
//         content: `<@${member.id}> Welcome to the server!`,
//         files: [img]
//     })
// })



// Welcome message code end

client.login(process.env.TOKEN)
