const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`${message.author} **Hocam Mesajları Yönet Yetkin Yoksa Ne Uğraşıyorsun ?**`));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setThumbnail('').setTitle('Şey... Bir Hata Olduda.').setDescription(`${message.author} **Hocam Sayı Yazmazsan Nasıl Ayarlıyım ?**

**Örnek:**
\`\`\`${client.ayarlar.prefix}yavaş-mod 60\`\`\``)).then(a => a.delete({timeout: 10000}));
message.channel.setRateLimitPerUser(args[0]);
message.channel.send(new Discord.MessageEmbed().setColor('9c5cb2').setThumbnail('').setTitle('Bu İş Tamam!').setDescription(`${message.author} **Yavaş Mod Tamamlandı!** (\`${args[0]}\`) **Saniye Olarak Uygulandı.**`)).then(a => a.delete({timeout: 10000}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yavaş-mod'
};