const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Şey... Bir Hata Olduda.').setDescription(` **Emojinin İsmi Doğru Değil, Veya Bu Sunucudan Bir Emoji Seçmedin.**`));
let emoji = message.guild.emojis.cache.find(s => s.name === args[0]);
if(!emoji) return message.channel.send(new Discord.MessageEmbed().setTitle('Şey... Bir Hata Olduda.').setDescription(` **Emojinin İsmi Doğru Değil, Veya Bu Sunucudan Bir Emoji Seçmedin.**`));
message.channel.send('**Al Hocam Buyur Linki**:\n\n'+emoji.url)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'emoji'
};