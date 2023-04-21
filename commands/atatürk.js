const Discord = require('discord.js');

exports.run = (client, message, args) => {
      let ataturk = "https://66.media.tumblr.com/b06854411c5898064404df969d5d8726/tumblr_oiys85a66p1tc53kto1_400.gif"
    const embed  = new Discord.MessageEmbed()
    .setImage("https://66.media.tumblr.com/b06854411c5898064404df969d5d8726/tumblr_oiys85a66p1tc53kto1_400.gif")
    .setAuthor('ATAM')
    .setDescription(`Atatürk <3`)
    .setFooter(`ATATÜRK İZİNDEYİZ! | 1881-1938`)
    .setColor("RANDOM")
     message.channel.send(embed);

};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'atatürk',
description: 'atatürk',
usage: 'atatürk'
};