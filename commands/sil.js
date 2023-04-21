const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setTitle('**`Hani Kardeşim Sende Mesajları Yönet İzni ? Göremiyorum.**'));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('**Dostum Bir Sayı Vermezsen Nasıl Silebilirimki** \`\`n!sil 100\`\` **[örnek]**'));
if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setTitle('**Dostum Mesaj Silme Limitim 100 Olduğu İçin 100 Den Fazla Silemem.**'));
message.channel.bulkDelete(args[0]);
return message.channel.send(new Discord.MessageEmbed().setTitle('**Toplamda** \`\`'+`${args[0]}`+'\`\` **adet mesaj silindi.**')).then(m => m.delete({timeout: 5000}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sil'
};