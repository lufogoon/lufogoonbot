const {
    MessageEmbed
} = require('discord.js')
const ms = require('ms');
module.exports = {
    name: 'giveaway',
    description: 'Crée un simple giveaway',
    usage: '<temps> <cadeau>',
    category: 'fun',
    run: async (bot, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Tu n'est pas admin!")
        let timev = message.content.slice(bot.prefix.length + 9)
        if (!timev) return message.channel.send('Tu n\'a précisé aucun temps en MS!')
        let time = parseInt(timev, 10)
        if (time < 15000) return message.channel.send('le minimum est de 15sec (15000 MS)')

        let prize = message.content.split(`${time}`).join("").split(`${bot.prefix}giveaway `).join("")
        if (!prize) return message.channel.send("Aucun cadeau spécifier!")
        const Embed = new MessageEmbed()
            .setTitle('Nouveau Giveaway!')
            .setDescription(prize)
            .setColor('RANDOM')
            .setFooter(`Ce giveaway dûre ${ms(time)}!`)
        let msg = await message.channel.send(Embed)
        await msg.react('🎉')

        function winner(msg) {

            let winner = msg.reactions.cache.get('🎉').users.cache.random().id
            return winner
        };

        function rawWinner(msg) {
            let winner = msg.reactions.cache.get('🎉').users.cache.random()
        }

        function reactions(msg) {
            return msg.reactions.cache.size
        }

        function reroll(msg) {
            return winner(msg)
        }
        setTimeout(() => {
            if (reactions(msg) < 1) return message.channel.send('Moin d\'une personne à participer au giveaway')
            let win = winner(msg)
            return message.channel.send(`Le cadeau **${prize}** à été gagné par <@${win}> !`)

        }, time);
    }
}