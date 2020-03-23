const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    name: "8ball",
    description: "Parle a la boule magique!",
    category: "fun",
    run: async (bot, message, args) => {
        let question = message.content.slice(bot.prefix.length + 6)
        if (!question) return message.channel.send(`Tu n'a précisé aucun texte!`)
        else {
            let responses = [
                "Oui",
                "Non",
                "absolument",
                "surtout pas",
                "peut être"
            ]
            let response = responses[Math.floor(Math.random() * (responses.length) - 1)]
            let Embed = new MessageEmbed()
                .setTitle(`8Ball!`)
                .setDescription(`Tu me demande: ${question}\nEt moi je te dit: ${response}`)
                .setColor(`RANDOM`)
            message.channel.send(Embed)
        }
    }
}