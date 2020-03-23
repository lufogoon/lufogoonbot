const {
    calculator
} = require('../../functions')
module.exports = {
    name: "math",
    category: "misc",
    description: "Une calculatrice sur mesure!",
    usage: "<numero1> <operateur> <numero2>",
    run: async (bot, message, args) => {
        if (!args[0]) return message.channel.send(`Aucun numero 1 précisé!`)
        if (!args[1]) return message.channel.send(`Aucun operateur précisé!`)
        if (!args[2]) return message.channel.send(`Aucun numero 2 précisé!`)
        message.channel.send(calculator(args[0], args[1], args[2]))
    }
}