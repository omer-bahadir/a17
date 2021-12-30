const Discord = require('discord.js');

module.exports = {
    name: 'whois',
    cooldown: 2,
    description: 'get info on the user you are mentioning',
    execute(client, msg, args) {
		let user = msg.mentions.users.first();
			if (!user) return msg.reply("Please provide a user to get your information on!");

		const member = msg.guild.member(user);
			if (!member) return msg.reply("User isn't in this guild!");

		let whoisEmbed = new Discord.MessageEmbed()
			.setColor("PURPLE")
			.setDescription(`${user.tag}`)
			.setAuthor(`${user.tag}`, user.displayAvatarURL())
			.setThumbnail(user.displayAvatarURL())
			.setFooter(`ID: ${user.id}`)
			.addField('Joined', `${member.joinedAt}`)
			.addField('Registered', `${member.user.createdAt}`);

		msg.channel.send(whoisEmbed).catch(err => console.log(err.message));
    }
}
