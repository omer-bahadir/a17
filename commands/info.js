const Discord = require('discord.js');
const HxH = require('.././characters.json');
//const HxH = JSON.stringify(fileContents);
//const HxH = JSON.parse(fileContents);

function getKeys(obj, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getKeys(obj[i], val));
        } else if (obj[i] == val) {
            objects.push(i);
        }
    }
    return objects.length;
}

module.exports = {
    name: 'info',
    cooldown: 2,
    description: 'get info on a HxH character',
    execute(client, msg, args) {
		let person = args.join(" ");
            if (!person) return msg.reply("Please provide a user to get your information on!");

        if (getKeys(HxH, person) > 0) {
            let whoisEmbed = new Discord.MessageEmbed()
			.setColor("PURPLE")
			.setDescription(`${person}`);

            msg.channel.send(whoisEmbed).catch(err => console.log(err.message));
        } else {
            msg.channel("Character not found.");
        }                    
    }
}
