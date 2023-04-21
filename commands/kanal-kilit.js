const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage('').setTitle('Bir hata oldu!').setDescription(`**Dostum Yönetici Rolün Yok Ve Bu Komutu Deniyorsun ?**`));
  message.channel.send(new Discord.MessageEmbed()
  .setColor('#00001').setTitle(`${message.channel.name} **Adlı Kanal Başarı İle Mesajlara Kapatıldı.**`));
  message.channel.overwritePermissions([{ id: message.guild.roles.cache.find(a => a.name === '@everyone').id, deny: ['SEND_MESSAGES'] }]);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kanal-kilit'
};