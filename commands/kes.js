const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MOVE_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setTitle(`**Dostum Üyeleri Taşı İznin Yok Gelmiş Deniyorsun ?**`));
if(message.member.voice.channel == undefined) return message.channel.send(new Discord.MessageEmbed().setTitle('Şey...  Bir Hata Olduda.').setDescription('**Dostum Sesli Kanalına Girmezsen Nasıl Halledebilirim ?**').setFooter(`Ping: ${client.ws.ping}`, client.user.avatarURL({dynamic:true})))
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('Şey...  Bir Hata Olduda.').setDescription('**Hocam Kullanıcıyı Etiketlermisin ?**'));
if(message.author.id === message.mentions.members.first()) return;
if(message.mentions.members.first().voice.channel == undefined) return message.channel.send(new Discord.MessageEmbed().setTitle('Şey... Bir Hata Olduda.').setDescription(`** Dostum Etiketlediğin** ${message.mentions.members.first()} **Ses Kanalında Yok.**`).setFooter(`Ping: ${client.ws.ping}`, client.user.avatarURL({dynamic:true})))
message.guild.members.cache.get(message.mentions.members.first().id).voice.kick();
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kes'
};