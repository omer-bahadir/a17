const Discord = require('discord.js');

module.exports = {
    name: 'dice',
    cooldown: 2,
    description: 'roll a dice with X amount of sides',
    execute(client, msg, args) {
        let sides = args[0];
            if (!sides) sides = 6;
            if (!Number.isInteger(Number(sides))) return msg.reply("Please give a number as your input!");
        
        let sideCalculation = Math.floor(Math.random()*sides)+1;

        msg.reply(`You rolled ${sideCalculation}.`);
    }
}
