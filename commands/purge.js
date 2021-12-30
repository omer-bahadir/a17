const Discord = require('discord.js');

module.exports = { 
    name: 'purge',
    cooldown: 1,
    description: "bulk delete x amount of messages",
    execute(client, msg, args) {
		if (!msg.member.permissions.has("MANAGE_MESSAGES")) return msg.reply("You do not have the proper permissions in order to preform this command!");
		if (!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.reply("I do not have the proper permissions in order to preform this command!");

		const amountDeleted = Number(args[0]);
			if (!amountDeleted) return msg.reply("You did not give me the amount of messages you want deleted!");
			if (amountDeleted > 100) return msg.reply("Cannot purge more than a hundred messages!");

		let reason = args.slice(1).join(" ");
			if (!reason) reason = "No reason given.";

		let deleteEmbed = new Discord.MessageEmbed()
			.setColor("GREEN")
			.setTitle(`Sucessfuly purged ${amountDeleted} message(s)!`, msg.author.displayAvatarURL())
			.setDescription(`**Reason:** ${reason}`);

		try {
			msg.channel.bulkDelete(amountDeleted);
			msg.channel.send(deleteEmbed);
		} catch (err) {
			console.log(err.message);
			msg.channel.send("Could not preform command due to an error!");
		}
    }	
}
