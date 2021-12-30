const Discord = require('discord.js');

module.exports = {
    name: 'coinflip',
    cooldown: 2,
    description: 'flip a coin',
    execute(client, msg, args) {
        const coinflip = ["Heads", "Tails"];
        let coinCalculation = Math.floor(Math.random()*2);

        msg.reply(`${coinflip[coinCalculation]}.`);
    }
}
