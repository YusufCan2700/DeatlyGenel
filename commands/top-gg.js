const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://share.creavite.co/bRUK5L1vGJzL5G2f.gif', 'https://share.creavite.co/bRUK5L1vGJzL5G2f.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Top.gg & Oy Menüsü

[Tıkla Oy Ver](https://top.gg/bot/1080560069604823120/vote)**
\`\`\`ZOR GUNLERIMIZDE BIZE DESTEK OLUP YARDIM EDIP OY VERENLER SUNUCUYA DAVET EDENLERE TESEKKURLER\`\`\`

[Discordumuza Oy Vermek İçin Tıkla](https://top.gg/servers/1082037211836469258/vote)
\`\`\`SUNUCUMUZA GELEREK BOTUN YENILIKLERINDEN HABERDAR OLABILIRSINIZ\`\`\`




`).setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['topgg', 'top-gg', 'oy-ver', 'oyver'],
  permLevel: 0
}

exports.help = {
  name: 'oy'
};