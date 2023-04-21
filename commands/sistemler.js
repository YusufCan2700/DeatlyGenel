const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**DeatlyWing Sistemler**`)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!şablon-yardım**', '\`\`\`Şablon Sistemine Bakarsınız.\`\`\`', true)
.addField('**d!toplu-rol-sistem**', '\`\`\`Toplu Rol Sistemine Bakarsınız.\`\`\`', true)
.addField('**d!otorol-sistem**', '\`\`\`GEÇİCİ OLARAK KALDIRILDI.\`\`\`', true)
.addField('**d!ticket-sistem**', '\`\`\`Destek Talebi Sistemine Bakarsınız.\`\`\`', true)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!kilit-sistem**', '\`\`\`Kilit Sistemine Bakarsınız.\`\`\`', true)
.addField('**d!sa-as**', '\`\`\`SA-AS Sistemini Açarsınız/Kapatırsınız.\`\`\`', true)

.setImage('https://share.creavite.co/bRUK5L1vGJzL5G2f.gif')
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sistemler", "system"],
  permLevel: 0

}

exports.help = {
  name: 'sistem'
};