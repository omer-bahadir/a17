// variables
const Discord  = require('discord.js');
const { prefix, token } = require("./config.json");
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();

const cooldowns = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// loop through all the files
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on("ready", () => {
	console.log('Online');
	
	client.user.setPresence({ status: "online", activity: { name: `${prefix}help`, type: "WATCHING" } }).catch(console.error);
});

client.on("message", msg => {
	// ignore non-important messages
	if (msg.author.bot) return;
	if (!msg.guild) return;
	if (!msg.content.startsWith(`${prefix}`)) return;

	// user input
	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	
	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);
	
	// cooldown system
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(msg.author.id)) {
		const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return msg.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before using this command again!`);
		}
	}

	timestamps.set(msg.author.id, now);
	setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);

	// execute the commands
	try {
		command.execute(client, msg, args);
	} catch (error) {
		msg.reply("Unkown Command!")
		console.log(error);
	}									
});	

client.login(token);
