const Discord = require('discord.js');

module.exports = {
	name: "help",
	cooldown: 2,
	description: "Get's all the commands",
	execute(client, msg, args) {
		const { commands } = msg.client;

		const helpEmbed = new Discord.MessageEmbed()
			.setColor("GREEN")
			.setThumbnail(msg.guild.iconURL())
			.setTitle("PitouBot Command Info")
			.setAuthor(`${msg.guild.name}`, msg.author.displayAvatarURL())
			.addField(`:hammer: Moderation`, '``kick`` ``ban`` ``unban`` ``softban``')
			.addField(`:tools: Utility`, '``slowmode`` ``purge``')
			.addField(`:8ball: Fun`, '``avatar`` ``8b`` ``slap`` ``dice`` ``coinflip``')
			.setFooter('Nyaruhodo! - Made by Paradoxical#1965', client.user.displayAvatarURL());
	    
		if (!args.length) return msg.channel.send(helpEmbed);

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) return msg.reply("That isn't a valid command!"); 
		
		// specific help embed
		const specHelp = new Discord.MessageEmbed()
			.setColor("DARK_VIVID_PINK")
			.setAuthor(`${msg.author.tag}`, msg.author.displayAvatarURL())
			.setDescription(`**NAME:** ${command.name}\n**DESCRIPTION:** ${command.description}\n**COOLDOWN:** ${command.cooldown} second(s)`)
			.setFooter('Android 17', client.user.displayAvatarURL());
 
		msg.channel.send(specHelp);
	}	
}
