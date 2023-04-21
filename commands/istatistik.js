const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**DeatlyWing İstatistikleri**`)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**Uptime Süresi :**', '```'+moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")+'```', true)
.addField('**Sunucu Sayısı :**', '```'+client.guilds.cache.size+'```', true)
.addField('**Kullanıcı Sayısı :**', '```'+client.users.cache.filter(a => !a.bot).size+'```', true)

.addField('**Bot Pingi :**', '```'+client.ws.ping.toFixed(0)+'```', true) 
.addField('**Botun Yapım Tarihi :**', '```06.03.2023 | 19:52 Pazar```', true)
.addField('**Son Güncelleme Tarihi :**', '```11:30/13.04.2023 Perşembe```', true)
.addField('**Botun Yapımcıları :**', '```Realwestツ#5415 ✮Reckless✮#8963```', true)

.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["stat", "s", "i", "istatistik"],
  permLevel: 0

}

exports.help = {
  name: 'stats'
};