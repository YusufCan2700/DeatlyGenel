const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(`**DeatlyWing Koruma**`)

.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!reklam-engel \`aç/kapat\`**', '\`\`\`Reklamları engeller. Düzenlenen mesajda da çalışır.\`\`\`', true)
.addField('**d!küfür-engel \`aç/kapat\`**', '\`\`\`Küfürleri engeller. Düzenlenen mesajda da çalışır.\`\`\`', true)
.addField('**d!caps-engel \`aç/kapat\`**', '\`\`\`Büyük Harfleri engeller. Düzenlenen mesajda da çalışır.\`\`\`', true)
.addField('**d!emoji-koruma \`aç/kapat\`**', '\`\`\`Silinen emojiyi tekrar açar. Açılan emojiyi siler.\`\`\`', true)
.addField('**d!rol-koruma \`aç/kapat\`**', '\`\`\`Silinen rolü izinleriyle beraber tekrar açar. Açılan rolü siler.\`\`\`', true)
                     
.setThumbnail('https://cdn.discordapp.com/avatars/996197601101746188/a_8149577173b5805ba42cd57c22e81703.gif')
.addField('**d!kanal-koruma \`aç/kapat\`**', '\`\`\`Silinen kanalı izinleriyle beraber tekrar açar. Açılan kanalı siler.\`\`\`', true)
.addField('**d!anti-raid \`aç/kapat\`**', '\`\`\`Sunucuya eklenen botları banlar.\`\`\`', true)
.addField('**d!tag-taraması**', '\`\`\`Tagları kontrol eder.\`\`\`', true)
.addField('**d!reklam-taraması**', '\`\`\`Reklamları kontrol eder.\`\`\`', true)
.addField('**d!sistemlog**', '\`\`\`Güvenlik mesajlarını göndereceği kanal.\`\`\`', true)
.addField('**d!koruma-rol**', '\`\`\`Güvenlik sistemlerinden etkilenmeyen rol.\`\`\`', true)
.addField('**d!koruma-sistemi**', '\`\`\`Tüm güvenlik sistemlerini açar.\`\`\`', true)


.setImage('https://share.creavite.co/bRUK5L1vGJzL5G2f.gif')
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["koru", "ka", "guard"],
  permLevel: 0

}

exports.help = {
  name: 'koruma'
};