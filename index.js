const Discord = require("discord.js")

const TOKEN = "MTAyMzA0MzM4NTk4NjEyMTg1OQ.GEO_Eh.sItxihQ8Y3tVp0jouYx0h0m-x2v8qKxcv37__8"

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(TOKEN)
