const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage('').setTitle('Şey... Bir Hata Olduda.').setDescription(`**Dostum Ciddimisin ?** \`${client.ayarlar.prefix}kilit-aç\` **İsimli Komutu Kullanmak İçin Yönetici Lazım Ve O Sende Yok!**`));
  message.channel.send(new Discord.MessageEmbed()
  .setColor('#00001').setTitle(`${message.channel.name} İsimli Kanalı Açtım Alın Yazın.`));
  message.channel.overwritePermissions([{ id: message.guild.roles.cache.find(a => a.name === '@everyone').id, allow: ['SEND_MESSAGES'] }]);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kilit-aç'
};