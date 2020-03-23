const Discord = require('discord.js')
module.exports = {
    name: "ping",
    category: 'info',
    description: "Vous donne des informations sur la latence",
    timeout: 10000,
    run: async (bot, message, args) => {
        message.channel.send(`🏓 Pinging....`).then(msg => {
            const _ = new Discord.MessageEmbed()
                .setTitle('Pong!')
                .setDescription(`🏓 Pong!\nLa latence est ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nLa latence API est ${Math.round(bot.ws.ping)}ms`)
                .setColor('RANDOM')
            msg.edit(_);
            msg.edit("\u200B")
        })
    }
}