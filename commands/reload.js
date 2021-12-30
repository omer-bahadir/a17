const Discord = require('discord.js');

module.exports = {
    name: 'reload',
    description: 'reloads a command',
    execute(client, msg, args) {
		if (!msg.author.id === 734836904125530112) return;
		if (!args.length) return msg.reply("You didn't pass any command to reload!");

		const commandName = args[0].toLowerCase();
		const command = msg.client.commands.get(commandName) || msg.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return msg.reply(`There is no command with the name or alias ${commandName}!`);

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			msg.client.commands.set(newCommand.name, newCommand);
		} catch (err) {
			console.log(err.message);
			msg.channel.send("There was an error while reloading a command.");
		}
    }
}
