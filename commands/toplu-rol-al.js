const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage('').setTitle('Şey... Bir Hata Olduda.').setDescription(`<a:Narvezyukleniyor3:1004545831896105120> **Dostum Yapma! Bu Komutu Kullanmak İçin Yönetici Olman Gerekiyor Ama Sende Yok.**`).addField('<:HylerTac:1000620355523715133> **Sunucu Sahibi Olman Gerekiyor.**', message.guild.owner.user.tag).setImage(''));

if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Şey... Bir Hata Olduda.').setDescription(`**Dostum Üyelerden Alıcağım** \`\`ROL ID\`\` **'Yi Belirtmezsen Nasıl Alabilirim Ki Rolü.**

**Örnek:**
\`\`\`${client.ayarlar.prefix}toplu-rol-al ${message.guild.roles.cache.random().id}\`\`\``).setColor('#000001'));
if(!message.guild.roles.cache.get(args[0])) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Şey... Bir Hata Olduda.').setDescription(`**Dostum Üyelerden Alıcağım** \`\`ROL ID\`\` **'Yi Belirtmezsen Nasıl Alabilirim Ki Rolü.**

**Örnek:**
\`\`\`${client.ayarlar.prefix}toplu-rol-al ${message.guild.roles.cache.random().id}\`\`\``).setColor('#000001'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('İşte bu kadar!').setDescription(`**Herkesden Teker Teker** \`\` ${message.guild.roles.cache.get(args[0])} \`\` **Adlı Rolü Alıyorum.**`));
message.guild.members.cache.forEach(a => {
setTimeout(() => {
if(a.roles.cache.has(message.guild.roles.cache.get(args[0]).id)) {
a.roles.remove(message.guild.roles.cache.get(args[0]).id);
}
}, 2000)
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["trol-al", "toplu-rol-al", "toplurol-al", "toplu-rolal", "toplurolal"],
  permLevel: 0
}

exports.help = {
  name: 'trol-al'
};