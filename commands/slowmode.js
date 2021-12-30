const Discord = require('discord.js');

module.exports = {
    name: "slowmode",
    cooldown: 1,
    description: "slowmode for the chat",
    async execute(client, msg, args) {
		if (!msg.member.permissions.has("MANAGE_CHANNELS")) return msg.reply("You do not have the proper permissions in order to preform this command!");
		if (!msg.guild.me.hasPermission("MANAGE_CHANNELS")) return msg.reply("I do not have the proper permissions to preform this command!");

		const cooldownAmount = await args[0];
			if (!cooldownAmount) return msg.reply("Please choose the amount of seconds you want!");
			if (cooldownAmount > 21600) return msg.reply("Limit is 21600 seconds!");

		try {
			msg.channel.setRateLimitPerUser(cooldownAmount);
			
			let cooldownEmbed = new Discord.MessageEmbed()
			.setColor("GREEN")
			.setAuthor(`${msg.author.tag}`, msg.author.displayAvatarURL())
			.setDescription(`Slowmode for ${msg.channel} has been set to ${cooldownAmount} seconds.`);

			msg.channel.send(cooldownEmbed);

		} catch (err) {
			msg.reply("I was not able to preform this command due to an error!");
		}
    }
}
