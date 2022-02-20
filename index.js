const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTQ0OTAxNzI5NTYzMDgyODIz.YhIWTw.oIWnqu6hrgWpVgjCeDbKH947ISs"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "ko"){
        message.reply("hui s oko")
    }
})

client.login(process.env.TOKEN)