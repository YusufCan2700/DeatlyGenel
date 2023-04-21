const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**DeatlyWing Kullanıcı**`)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!avatar**', '\`\`\`Birinin Avatarını Almanıza Yarar.\`\`\`', true)
.addField('**d!emoji**', '\`\`\`Emoji İndirmenize Yarar.\`\`\`', true)                     
.addField('**d!sunuculogo**', '\`\`\`Sunucunun Fotoğrafını Yarar.\`\`\`', true)
.addField('**d!kullanıcı-bilgi**', '\`\`\`Kullanıcı Bilgilerini Gösterir.\`\`\`', true)
.addField('**d!üye-durum**', '\`\`\`Üyelerin Durumunu Gösterir.\`\`\`', true)                     
                     
.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!yılbaşı**', '\`\`\`Yılbaşına Kalan Süreyi Gösterir.\`\`\`', true)
.addField('**d!sunucu-bilgi**', '\`\`\`Sunucu Bilgilerini Gösterir.\`\`\`', true)
.addField('**d!bot-bilgi**', '\`\`\`Bot Bilgilerini Gösterir.\`\`\`', true)
.addField('**d!oylama**', '\`\`\`Sunucu da Oylama Başlatır.\`\`\`', true)
.addField('**d!afk**', '\`\`\`Afk Olursunuz.\`\`\`', true)

.setImage('https://share.creavite.co/bRUK5L1vGJzL5G2f.gif')
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kullanıcı", "user", "k"],
  permLevel: 0

}

exports.help = {
  name: 'users'
};