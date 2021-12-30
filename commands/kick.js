const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: "kick",
	cooldown: 1,
	description: "kick a player",
	async execute(client, msg, args) {
		if (!msg.member.permissions.has("KICK_MEMBERS")) return msg.reply("You do not have the proper permissions in order to preform this command!");
		if (!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.reply("I do not have the proper permissions in order to perform this command!");

		const user = msg.mentions.users.first();
			if (!user) return msg.reply("Please mention a user to kick!");

		const member = msg.guild.member(user);
			if (!member) return msg.reply("Mentioned user isn't in this server!");

		if (!member.manageable) return msg.reply("This user isn't kickable due to the role heirarchy!");
		if (!member.kickable) return msg.reply("This user isn't kickable due to permissions!");

		let reason = args.slice(1).join(" ")
			if (!reason) reason = "No given reason.";

		try {
			member.kick({reason: reason});

			let kickEmbed = new Discord.MessageEmbed()
				.setColor("GREEN")
				.setTitle(`${user.tag} has been kicked`, user.displayAvatarURL())
				.setDescription(`**Reason**: ${reason}`);

			msg.channel.send(kickEmbed);

		} catch (err) {
			msg.reply("I was unable to kick this user due to an error.");
		} 
	}
}
