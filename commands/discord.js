const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(` **DeatlyWing Destek Sunucu**
**

[Destek Sunucu  İçin Tıkla](https://discord.gg/qvneptGgpq)

**

`).setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["davet", "davet-et", "davetet"],
  permLevel: 0

}

exports.help = {
  name: 'discord'
};