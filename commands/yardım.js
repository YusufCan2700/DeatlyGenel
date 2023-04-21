const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**DeatlyWing Yardım Menüsü**`)

.setThumbnail('')
.addField('**d!moderasyon**', '\`\`\`Moderasyon Komutlarına Bakarsınız.\`\`\`', true)
.addField('**d!kullanıcı**', '\`\`\`Kullanıcı Komutlarına Bakarsınız.\`\`\`', true)
.addField('**d!eğlence**', '\`\`\`Eğlence Komutlarına Bakarsınız.\`\`\`', true)
.addField('**d!bot**', '\`\`\`Bot Komutlarına Bakarsınız.\`\`\`', true)
.addField('**d!koruma**', '\`\`\`Koruma Komutlarına Bakarsınız.\`\`\`', true)                       

.setThumbnail('')
.addField('**d!sistemler**', '\`\`\`Sistemlere Bakarsınız.\`\`\`', true)
.addField('**d!logo**', '\`\`\`Logo Komutlarına Bakarsınız.\`\`\`', true)
.addField('**d!ekonomi**', '\`\`\`Ekonomi Komutlarına Bakarsınız.\`\`\`', true)

.setImage('https://share.creavite.co/bRUK5L1vGJzL5G2f.gif')
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help", "y", "h"],
  permLevel: 0

}

exports.help = {
  name: 'yardım'
};