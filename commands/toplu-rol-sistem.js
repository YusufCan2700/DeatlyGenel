const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`<:Narvezyildiz2:1004546133953106040> \`\`>>\`\` **Toplu Rol Sistem Menü;**

**d!toplu-rol-al**
> \`\`Herkesden Seçtiğin Rolü Alır.\`\`

**d!toplu-rol-ver**
> \`\`Herkese Seçtiğin Rolü Verir.\`\`

`).setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['toplu-rol', 'toplurol', 'toplurolsistem', 'toplurol-sistem', 'toplu-rolsistem'],
  permLevel: 0
}

exports.help = {
  name: 'toplu-rol-sistem'
};