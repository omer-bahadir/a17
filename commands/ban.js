const Discord = require('discord.js');

module.exports = {
    name: "ban",
    cooldown: 1,
    description: "ban someone with the hammer",
    execute(client, msg, args) {
    	if (!msg.member.permissions.has("BAN_MEMBERS")) return msg.reply("You do not have the proper permissions to preform this command!");
		if (!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.reply("I do not have the proper permissions to preform this command!");

		const user = msg.mentions.users.first();
			if (!user) return msg.reply("Please mention a user to ban!");

		const member = msg.guild.member(user);
			if (!member) return msg.reply("User isn't in this guild!");

		if (!member.manageable) return msg.reply("This user isn't bannable due to the role heirarchy!");
		if (!member.bannable) return msg.reply("This user isn't bannable due to permissions!");

		let reason = args.slice(1).join(" ")
			if (!reason) reason = "No reason given"

		let banArgs = {
			days: 7,
			reason: reason
		}

		try {
			member.ban(banArgs);

			let banEmbed = new Discord.MessageEmbed()
			.setColor("GREEN")
			.setAuthor(`${user.tag} has been banned`, user.displayAvatarURL())
			.setDescription(`**Reason:** ${reason}`);

			msg.channel.send(banEmbed);
		} catch (err) {
			msg.reply("I was unable to ban that user due to an error!")
		}
    }
}