const Discord = require('discord.js');

module.exports = {
    name: 'slap',
    cooldown: 2,
    description: 'slap a member',
    execute(client, msg, args) {
		let user = args.join(" ");
			if (!user) user = msg.author;

		let slapArray = ["https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943", 
				"https://thumbs.gfycat.com/DefiantBlindHyena-size_restricted.gif", 
				"https://media1.tenor.com/images/4eed54377433c396ce2d9ad9ee5d22ef/tenor.gif?itemid=11234788", 
				"https://media3.giphy.com/media/Gf3AUz3eBNbTW/200.gif", 
				"https://thumbs.gfycat.com/PersonalUnlinedAsiaticwildass-size_restricted.gif", 
				"https://thumbs.gfycat.com/YearlyHighlevelFly-small.gif",
				"https://i.imgur.com/X3ZqwN3.gif",
				"https://thumbs.gfycat.com/HatefulSilverIndochinesetiger-size_restricted.gif",
				"https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif",
				"https://i.imgur.com/mIg8erJ.gif",
				"https://i.imgur.com/CwbYjBX.gif"];
		
		let slapCalculation = Math.floor(Math.random()*11);

		let slapEmbed = new Discord.MessageEmbed()
			.setColor("PURPLE")
			.setDescription(`${msg.author} has slapped ${user}!`)
			.setImage(slapArray[slapCalculation]);

		msg.channel.send(slapEmbed);
    }
}
