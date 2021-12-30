const Discord = require('discord.js');

module.exports = {
    name: 'punch',
    cooldown: 2,
    description: 'punch a member',
    execute(client, msg, args) {
        let user = args.join(" ")
            if (!user) user = msg.author;

        let punchArray = ["https://thumbs.gfycat.com/ImperfectFrightenedFoal-size_restricted.gif",
                        "https://i.pinimg.com/originals/bc/96/17/bc9617a2460e4640fcd9cf474bea2c10.gif",
                        "https://cdn159.picsart.com/228190013051202.gif?to=min&r=640",
                        "https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446",
                        "https://thumbs.gfycat.com/AmazingAngryCoelacanth-max-1mb.gif",
                        "https://thumbs.gfycat.com/ImperfectFrightenedFoal-size_restricted.gif"];

        let punchCalculation = Math.floor(Math.random()*6);

        let punchEmbed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`${msg.author} has punched ${user}`)
            .setImage(punchArray[punchCalculation]);

        msg.channel.send(punchEmbed);
    }
}