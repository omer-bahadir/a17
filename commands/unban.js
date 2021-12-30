const Discord = require('discord.js');

module.exports = {
    name: "unban",
    cooldown: 1,
    description: "unban a member",
    execute(client, msg, args) {
		if (!msg.member.permissions.has("BAN_MEMBERS")) return msg.reply("You don't have permission to preform this command!");

		let bannedMember = args[0];
			if (!bannedMember) return msg.reply("Please provide a user ID");

		let reason = args.slice(1).join(" ")
			if (!reason) reason = "No reason given"

		if (!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.reply("I don't have permission to preform this command!");

		try {
			msg.guild.members.unban(bannedMember, {reason: reason});
			
			let unbanEmbed = new Discord.MessageEmbed()
			.setColor("GREEN")
			.setAuthor(`${bannedMember} has been unbanned`)
			.setDescription(`**Reason**: ${reason}`);

			msg.channel.send(unbanEmbed);
		} catch (err) {
			msg.reply("I was unable to unban the user due to an error!");
		}   
    }
}
