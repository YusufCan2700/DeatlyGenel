const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage('').setTitle('Şey... Bir Hata Olduda.').setDescription(`**Dostum Ciddimisin ?** \`${client.ayarlar.prefix}sunucudan-ayrıl\` **Yönetici Rolün Yoksa Bu Komutu Kullanamazsın.**.**`).addField(''));

message.channel.send(new Discord.MessageEmbed()
.setTitle(client.user.username)
.setFooter(message.author.username, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
.setDescription(`${message.author} **Beni Cidden Bu Sunucudan Ayırmak Mı İstiyorsun ?**`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', () => {
message.channel.send(new Discord.MessageEmbed().setDescription('**Sunucunuzdan ayrılıyorum. Kullandığınız için teşekkürler.**')).then(() => message.guild.leave());
});
no.on('collect', () => {
resulter.delete();
});
});

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucudan-ayrıl'
};