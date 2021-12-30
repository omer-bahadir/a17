const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    cooldown: 1,
    description: 'get a users avatar',
    execute(client, msg, args) {
		const user = msg.mentions.users.first();
			if (!user) return msg.reply("Please mention the user that you are trying to get the avatar from.");

		let avatarEmbed = new Discord.MessageEmbed()
			.setColor("GREEN")
			.setImage(user.displayAvatarURL());

		msg.channel.send(avatarEmbed);
    }
}
