const Discord = require('discord.js');

module.exports = {
    name: "softban",
    cooldown: 1,
    description: "softban a member",
    execute(client, msg, args) {
		if (!msg.member.permissions.has("KICK_MEMBERS")) return msg.reply("You do not have the proper permissions in order to preform this command.");
		if (!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.reply("I do not have the proper permissions in order to preform this command.");

		const user = msg.mentions.users.first();
			if (!user) return msg.reply("Please mention a user to softban!");

		const userID = msg.mentions.users.first().id;

		const member = msg.guild.member(user);
			if (!member) return msg.reply("Mentioned user isn't in this server!");

		if (!member.manageable) return msg.reply("This user isn't soft-bannable due to the role heirarchy!");
		if (!member.bannable) return msg.reply("This user isn't soft-bannable due to permissions!");

		let reason = args.slice(1).join(" ")
			if (!reason) reason = "No reason given";
		
		let softbanArgs = {
			days: 7,
			reason: reason
		}    

		try {
			member.ban(softbanArgs);
			msg.guild.members.unban(userID);

			let softbanEmbed = new Discord.MessageEmbed()
			.setColor("GREEN")
			.setTitle(`${user.tag} has been softbanned`, user.displayAvatarURL())
			.setDescription(`**Reason:**`, reason);

			msg.channel.send(softbanEmbed);

		} catch (err) {
			msg.reply("I was not able to softban this user due to an error.");
		}
    } 
}
