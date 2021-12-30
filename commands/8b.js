const Discord = require('discord.js');

module.exports = {
    name: '8b',
    cooldown: 1,
    description: 'virtual 8 ball',
    execute(client, msg, args) {
        const response = ["As I see it, yes.", "Ask again later.", "No - definitely.", "No.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes.", "Yes - definitely.", "You may rely on it."];
        let calculatedResponsed = Math.floor(Math.random() * 21) + 1;

        msg.reply(response[calculatedResponsed]);
    }
}
