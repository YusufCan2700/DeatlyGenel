const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage('').setTitle('Şey... Bir Hata Olduda.').setDescription(`<a:Narvezyukleniyor3:1004545831896105120> **Dostum Yapma! Bu Komutu Kullanmak İçin Yönetici Olman Gerekiyor Ama Sende Yok.**`).addField('**Sunucu Sahibi Olman Gerekiyor.**', message.guild.owner.user.tag).setImage(''));

if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Şey... Bir Hata Oldu.').setDescription(`**Dostum Üyelere Vericeğim** \`\`ROL ID\`\` **'Yi Belirtmezsen Nasıl Verebilirimki Rolü.**

**Örnek:**
\`\`\`${client.ayarlar.prefix}toplu-rol-ver ${message.guild.roles.cache.random().id}\`\`\``).setColor('#000001'));
if(!message.guild.roles.cache.get(args[0])) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Şey... Bir Hata Oldu.').setDescription(`**Dostum Üyelere Vericeğim** \`\`ROL ID\`\` **'Yi Belirtmezsen Nasıl Verebilirimki Rolü.**

**Örnek:**
\`\`\`${client.ayarlar.prefix}toplu-rol-ver ${message.guild.roles.cache.random().id}\`\`\``).setColor('#000001'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Bu İş Tamam!').setDescription(`**Herkese Teker Teker** \`\` ${message.guild.roles.cache.get(args[0])} \`\` **Adlı Rolü Veriyorum.**`));
message.guild.members.cache.forEach(a => {
setTimeout(() => {
if(!a.roles.cache.has(message.guild.roles.cache.get(args[0]).id)) {
a.roles.add(message.guild.roles.cache.get(args[0]).id);
}
}, 2000)
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["trol-ver", "toplu-rol-ver", "toplurol-ver", "toplu-rolver", "toplurolver"],
  permLevel: 0
}

exports.help = {
  name: 'trol-ver'
};