const Discord = require('discord.js')
module.exports = {
    name: "poll",
    aliases: ["sondage"],
    description: "Permet de crée un sondage",
    category: "fun",
    run: async (bot, message, args) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`Tu n'a pas la permission pour cette commande, ${message.author.username}`)
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) {
            return message.channel.send(`Tu n'a précisé aucun salon`)
        }
        let question = message.content.split(`${bot.prefix}poll ${channel} `).join("")
        if (!question) return message.channel.send(`Tu n'a pprécisé aucun texte de sondage!`)
        const Embed = new Discord.MessageEmbed()
            .setTitle(`New poll!`)
            .setDescription(`${question}`)
            .setFooter(`${message.author.username} à crée ce sondage.`)
            .setColor(`RANDOM`)
        let msg = await bot.channels.cache.get(channel.id).send(Embed)
        await msg.react("👍")
        await msg.react("👎")
    }
}