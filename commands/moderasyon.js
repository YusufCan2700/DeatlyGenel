const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**Moderasyon Yardım**`)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!ban**', '\`\`\`Ban Sistemine Bakmanıza Yarar.\`\`\`', true)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!nuke**', '\`\`\`Kanal Silmenize Yarar.\`\`\`', true)
.addField('**d!sil**', '\`\`\`Chatteki Mesajları Silmenize Yarar.\`\`\`', true)
.addField('**d!sayaç #kanal <sayı>**', '\`\`\`Sunucunun Sayaç Sistem.\`\`\`', true)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!yavaş-mod**', '\`\`\`Bir Kanalın Yavaş Modunu Açarsınız.\`\`\`', true)
.addField('**d!kick**', '\`\`\`Birisini Sunucudan Kicklemenize Yarar.\`\`\`', true)
.addField('**d!kurallar**', '\`\`\`Eğer Sunucuda Kurallarınız Yoksa Gayet İyi Bir Komut.\`\`\`', true)
.addField('**d!rol ver**', '\`\`\`Bir Kullanıcıya Rol Vermeye Yarar.\`\`\`', true)                     
.addField('**d!rol al**', '\`\`\`Kişiden RolÜ Almaya Yarar.\`\`\`', true)

.setImage('https://share.creavite.co/bRUK5L1vGJzL5G2f.gif')
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["moderation", "mod", "m"],
  permLevel: 0

}

exports.help = {
  name: 'moderasyon'
};